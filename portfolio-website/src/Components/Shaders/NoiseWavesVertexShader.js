const vertexShader = `
uniform float u_time;
uniform float u_pointSize;
uniform vec2  u_amplitude;
uniform vec2  u_speed;
uniform vec2  u_noiseResolution;
uniform vec2  u_scale;

varying float vZ;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {

    vec2 UVs = (position.xz/u_scale) * u_noiseResolution + u_speed * u_time;

    vec3 pos = position;
    pos.y   += map(noise(UVs), 0.0, 1.0, u_amplitude.x, u_amplitude.y);
    
    vZ = pos.y;
    
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    
    gl_PointSize = u_pointSize * ( 300.0 / -viewPosition.z );
}

`

export default vertexShader