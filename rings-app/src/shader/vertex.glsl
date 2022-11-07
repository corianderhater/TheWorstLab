uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vColor;
uniform vec2 pixels;
    
    void main() {
      vec4 result;
      vUv = uv;
      result = vec4(position.x, position.y, position.z, 1.0);
      gl_Position = projectionMatrix * modelViewMatrix * result;  
    }