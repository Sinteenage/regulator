/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    bolts02: THREE.Mesh;
  };
  materials: {
    Metal_Grey_Plain: THREE.MeshStandardMaterial;
  };
};

export function ScrewBack(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/assets/models/screwBack.gltf') as GLTFResult;

    materials.Metal_Grey_Plain.roughness = 0.1;
    materials.Metal_Grey_Plain.metalness = 0.9;

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bolts02.geometry}
                material={materials.Metal_Grey_Plain}
                rotation={[-Math.PI / 2, Math.PI / 8, -Math.PI]}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/assets/models/screwBack.gltf');