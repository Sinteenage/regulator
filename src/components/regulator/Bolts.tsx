/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { OperationsNames } from '../../types';

type GLTFResult = GLTF & {
  nodes: {
    bolts: THREE.Mesh;
  };
  materials: {
    Metal_Grey_Plain: THREE.MeshStandardMaterial;
  };
};

interface regProps {
  operationId: string;
  onActive: (active: boolean) => void;
  props?: JSX.IntrinsicElements['group']
}

export const Bolts: React.FC<regProps> = ({operationId, onActive, props}) => {
    const modelRef = useRef<Group>(null!);

    const { nodes, materials } = useGLTF('/assets/models/bolts.gltf') as GLTFResult;

    useFrame(() => {
        if(operationId === OperationsNames.OPR_5 && modelRef.current){
            if(modelRef.current.position.z >= -0.4){
                modelRef.current.position.z = modelRef.current.position.z - 0.05;
            } else {
                operationId = '';
                onActive(false);
            }
        }
        if(operationId === OperationsNames.OPR_7){
            if(modelRef.current.position.z <= -0.02){
                modelRef.current.position.z = modelRef.current.position.z + 0.05;
            } else {
                operationId = '';
                onActive(false);
            }
        }
        if(operationId === OperationsNames.OPR_8){
            if(modelRef.current.position.y <= 5){
                modelRef.current.position.y = modelRef.current.position.y + 0.05;
            } else {
                operationId = '';
            }
        }
        if(operationId === OperationsNames.OPR_9){
            if(modelRef.current.position.y >= 0){
                modelRef.current.position.y = modelRef.current.position.y - 0.1;
            }
        }
    });

    return (
        <group {...props} ref={modelRef} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bolts.geometry}
                material={materials.Metal_Grey_Plain}
                scale={0.025}
            />
        </group>
    );
};

useGLTF.preload('/assets/models/bolts.gltf');