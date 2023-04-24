/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { OperationsNames } from '../../types';
import { useRef } from 'react';
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    reduct_1: THREE.Mesh;
    reduct_2: THREE.Mesh;
    reduct_3: THREE.Mesh;
    reduct_4: THREE.Mesh;
    reduct_5: THREE.Mesh;
    reduct_6: THREE.Mesh;
  };
  materials: {
    Metal_Chrome: THREE.MeshStandardMaterial;
  };
};

interface regProps {
    operationId: string;
    onActive: (active: boolean) => void;
    props?: JSX.IntrinsicElements['group']
}

export const Reduckt: React.FC<regProps> = ({operationId, onActive, props}) => {
    const modelRef = useRef<Group>(null!);

    const { nodes, materials } = useGLTF('/assets/models/reduckt.gltf') as GLTFResult;

    materials.Metal_Chrome.roughness = 0.2;
    materials.Metal_Chrome.metalness = 1;

    useFrame(() => {
        if(operationId === OperationsNames.OPR_8 && modelRef.current){
            if(modelRef.current.position.y <= 5){
                modelRef.current.position.y = modelRef.current.position.y + 0.05;
            } else if(modelRef.current.position.z <= 5){
                modelRef.current.position.z = modelRef.current.position.z + 0.05;
            } else {
                operationId = '';
                onActive(false);
            }
        }
        if(operationId === OperationsNames.OPR_9){
            if(modelRef.current.position.y >= 0){
                modelRef.current.position.y = modelRef.current.position.y - 0.1;
            }
            if(modelRef.current.position.z >= 0){
                modelRef.current.position.z = modelRef.current.position.z - 0.3;
            }
        }
    });

    return (
        <group {...props} ref={modelRef} dispose={null}>
            <group
                position={[0, 0, 0.05]}
                scale={0.025}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.reduct_1.geometry}
                    material={materials.Metal_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.reduct_2.geometry}
                    material={materials.Metal_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.reduct_3.geometry}
                    material={materials.Metal_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.reduct_4.geometry}
                    material={materials.Metal_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.reduct_5.geometry}
                    material={materials.Metal_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.reduct_6.geometry}
                    material={materials.Metal_Chrome}
                />
            </group>
        </group>
    );
};

useGLTF.preload('/assets/models/reduckt.gltf');