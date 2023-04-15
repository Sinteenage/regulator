/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder09_1: THREE.Mesh;
    Cylinder09_2: THREE.Mesh;
    Line03_1: THREE.Mesh;
    Line03_2: THREE.Mesh;
    Line03_3: THREE.Mesh;
  };
  materials: {
    Red_Metal: THREE.MeshStandardMaterial;
    Material__72: THREE.MeshStandardMaterial;
  };
};

export function Pipes(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/assets/models/pipes.gltf') as GLTFResult;

    materials.Material__72.roughness = 0.2;
    materials.Material__72.metalness = 0.8;
    materials.Material__72.flatShading = true;

    materials.Red_Metal.roughness = 0;
    materials.Red_Metal.metalness = 1;

    return (
        <group {...props} dispose={null}>
            <group
                position={[0, -0.05, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]} 
                scale={0.0255}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder09_1.geometry}
                    material={materials.Material__72}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder09_2.geometry}
                    material={materials.Material__72}
                />
            </group>
            <group
                position={[0, -0.1, 0]}
                rotation={[0, -1.57, 0]}
                scale={0.0255}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Line03_1.geometry}
                    material={materials.Red_Metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Line03_2.geometry}
                    material={materials.Red_Metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Line03_3.geometry}
                    material={materials.Red_Metal}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/assets/models/pipes.gltf');