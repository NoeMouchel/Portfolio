const fragmentShader = `
uniform sampler2D u_maskTexture;

varying float vZ;
varying vec3  vColor;

void main() {    
    gl_FragColor = vec4(vColor, 1.0) * texture2D(u_maskTexture, gl_PointCoord);
}

`

export default fragmentShader
