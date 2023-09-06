import { useMemo, useRef } from 'react';
import { Color, PlaneGeometry, Vector2, TextureLoader } from 'three'
import { useFrame } from '@react-three/fiber'
import vertexShader from '../Shaders/NoiseWavesVertexShader';
import fragmentShader from '../Shaders/NoiseWavesFragmentShader';

import particleDot from '../../Assets/particleDot.png'

const getPlaneGeometry = (geometrySize, density) => {

  const geometry = new PlaneGeometry(geometrySize, geometrySize, density, density);
  geometry.rotateX(-Math.PI / 2);

  const vertices = geometry.attributes.position.array;

  return vertices;
}

export function DotWaves(props) {

  //  Default props values
  const {
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,

    pointSize = 0.5,
    density = 50,
    geometrySize = new Vector2(100, 100),

    colorA = new Color('#FFFFFF'),
    colorB = new Color('#FFFFFF'),

    amplitudeMin = -5,
    amplitudeMax = 5,

    speedX = 0.15,
    speedY = 0.15,

    noiseResolution = 15,
  } = props;

  // This reference will give us direct access to the mesh
  const points = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_amplitude: { value: new Vector2(amplitudeMin, amplitudeMax) },
      u_speed: { value: new Vector2(speedX, speedY) },
      u_pointSize: { value: pointSize },
      u_colorA: { value: colorA },
      u_colorB: { value: colorB },
      u_maskTexture: { value: new TextureLoader().load(particleDot) },
      u_scale: { value: new Vector2(geometrySize, geometrySize) },
      u_density: { value: new Vector2(density, density) },
      u_noiseResolution: { value: new Vector2(noiseResolution, noiseResolution) },
    }), [amplitudeMin, amplitudeMax, speedX, speedY, pointSize, colorA, colorB, noiseResolution, density, geometrySize]
  );

  const vertices = useMemo(() => {
    return getPlaneGeometry(geometrySize, density)
  }, [geometrySize, density]);

  useFrame((state) => {
    const { clock } = state;
    points.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (

    <points ref={points} position={position} rotation={rotation} scale={scale}>

      <bufferGeometry attach='geometry'>
        <bufferAttribute
          attach='attributes-position'
          count={vertices.length / 3}
          array={vertices}
          itemSize={3}
        />
      </bufferGeometry>

      <shaderMaterial
        transparent={true}
        depthTest={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
}
