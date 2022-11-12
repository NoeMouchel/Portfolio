const fragmentShader = `
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec2 u_amplitude;
varying float vZ;
uniform sampler2D u_maskTexture;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main() {
    
    //if (texture2D(u_maskTexture, gl_PointCoord).a < 0.9 ) discard;

    vec3 color = mix(u_colorA, u_colorB, map(vZ, u_amplitude.x, u_amplitude.y, 0.0, 1.0)); 
    gl_FragColor = vec4(color, 1.0) * texture2D(u_maskTexture, gl_PointCoord);
}

`

export default fragmentShader
