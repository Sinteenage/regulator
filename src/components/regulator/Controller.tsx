/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { OperationsNames } from '../../types';

type GLTFResult = GLTF & {
    nodes: {
        Box01: THREE.Mesh;
        Cylinder03_1: THREE.Mesh;
        Cylinder03_2: THREE.Mesh;
        Cylinder03_3: THREE.Mesh;
        Cylinder03_4: THREE.Mesh;
        Cylinder07: THREE.Mesh;
        ['Blue-Cone1_1']: THREE.Mesh;
        ['Blue-Cone1_2']: THREE.Mesh;
        Object02_1: THREE.Mesh;
        Object02_2: THREE.Mesh;
        Object02_3: THREE.Mesh;
        Cylinder01_1: THREE.Mesh;
        Cylinder01_2: THREE.Mesh;
        Cylinder01_3: THREE.Mesh;
        Object01: THREE.Mesh;
    };
  materials: {
        Default: THREE.MeshStandardMaterial;
        ['Reduktor-Red']: THREE.MeshStandardMaterial;
        ['Obv-Red1']: THREE.MeshStandardMaterial;
        ['Kran-Alum-Red']: THREE.MeshStandardMaterial;
    };
};

interface regProps {
    operationId: string;
    onActive: (active: boolean) => void;
    props?: JSX.IntrinsicElements['group']
}

export const Controller: React.FC<regProps> = ({operationId, onActive, props}) => {

    const modelRef = useRef<Group>(null!);

    const { nodes, materials } = useGLTF('/assets/models/controller.gltf') as GLTFResult;

    const [ blueTexture ] = useTexture(['/assets/textures/blue.jpg']);

    materials.Default.roughness = 0.25;
    materials.Default.metalness = 0.4;

    materials['Reduktor-Red'].roughness = 0.2;
    materials['Reduktor-Red'].metalness = 0.8;

    materials['Obv-Red1'].roughness = 0.2;
    materials['Obv-Red1'].metalness = 0.8;

    materials['Kran-Alum-Red'].roughness = 0.1;
    materials['Kran-Alum-Red'].metalness = 0.9;

    useFrame(() => {
        if(operationId === OperationsNames.OPR_1 && modelRef.current){
            if(modelRef.current.position.y <= 2){
                modelRef.current.position.y = modelRef.current.position.y + 0.1;
            } else if(modelRef.current.position.x >= -15){
                modelRef.current.position.x = modelRef.current.position.x - 0.2;
            } else {
                operationId = '';
                onActive(false);
            }
        }
    });

    return (
        <group {...props} ref={modelRef} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                scale={[0.025, 0.025, 0.025]}
            >
                <primitive object={nodes.Box01.geometry} />
                <meshStandardMaterial transparent opacity={0.6} roughness={0.1} metalness={0.7}/>
            </mesh>
            <group
                position={[0, -0.1, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.03, 0.03, 0.03]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder03_1.geometry}
                    material={materials['Reduktor-Red']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder03_2.geometry}
                    material={materials['Obv-Red1']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder03_3.geometry}
                    material={materials['Obv-Red1']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder03_4.geometry}
                    material={materials['Obv-Red1']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                material={materials.Default}
                position={[0, 0, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.025, 0.022, 0.025]}
            >
                <primitive object={nodes.Cylinder07.geometry} />
            </mesh>
            <group
                position={[0, 0, 0]}
                rotation={[Math.PI, 0, Math.PI / 2]}
                scale={[0.025, 0.025, 0.025]}
            >
                <mesh
                    castShadow
                    receiveShadow
                >
                    <primitive object={nodes['Blue-Cone1_1'].geometry} />
                    <meshStandardMaterial map={blueTexture} roughness={0.6} metalness={0.6}/>
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                >
                    <primitive object={nodes['Blue-Cone1_2'].geometry} />
                    <meshStandardMaterial map={blueTexture} roughness={0.6} metalness={0.6}/>
                </mesh>
            </group>
            <group
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.025, 0.025, 0.025]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object02_1.geometry}
                    material={nodes.Object02_1.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object02_2.geometry}
                    material={nodes.Object02_2.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object02_3.geometry}
                    material={nodes.Object02_3.material}
                />
            </group>
            <group
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.015, 0.0132, 0.015]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder01_1.geometry}
                    material={materials['Kran-Alum-Red']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder01_2.geometry}
                    material={materials['Kran-Alum-Red']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder01_3.geometry}
                    material={materials['Kran-Alum-Red']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object01.geometry}
                material={nodes.Object01.material}
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[0.025, 0.025, 0.025]}
            />
        </group>
    );
};

useGLTF.preload('/assets/models/controller.gltf');