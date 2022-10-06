
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function ModelBoids() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/3d/b3.glb");

  return (
    <primitive object={gltf.scene} />
  )
}