import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, useEnvironment } from '@react-three/drei';

import { Controller } from '../regulator/Controller';
import { Pipes } from '../regulator/Pipes';
import { Corpus } from '../regulator/Corpus';
import { BackCup } from '../regulator/BackCup';
import { Bolts } from '../regulator/Bolts';
import { FrontCup } from '../regulator/FrontCup';
import { Laying } from '../regulator/Laying';
import { Reduckt } from '../regulator/Reduckt';
import { Screw } from '../regulator/Screw';
import { ScrewBack } from '../regulator/ScrewBack';
import { ThreadCup } from '../regulator/ThreadCup';
import { useResize } from '../../hooks/useResize';

interface SceneProp {
    operationId: string;
    onActive: (active: boolean) => void;
}

const Scene: React.FC<SceneProp> = ({ operationId, onActive }) => {
    const envMap = useEnvironment({files: '/assets/textures/boiler_room_1k.hdr'});

    const [fov, setFov] = useState(20);

    const { width } = useResize();

    useEffect(() => {
        (width < 600) ? setFov(40) : setFov(20);
    },[width]);

    return (
        <Canvas>
            <OrbitControls target={[0, 2, -2]} maxPolarAngle={1.45} enableZoom={false}/>

            <PerspectiveCamera makeDefault fov={fov} position={[40, 0, 0]}/>

            <ambientLight intensity={0.1}/>

            <directionalLight color='white' position={[10, 8, 5]} intensity={1}/>

            <Environment map={envMap}/>

            <Controller operationId={operationId} onActive={onActive}/>
            <Pipes operationId={operationId} onActive={onActive}/>
            <Corpus operationId={operationId} onActive={onActive}/>
            <BackCup operationId={operationId} onActive={onActive}/>
            <Bolts operationId={operationId} onActive={onActive}/>
            <FrontCup/>
            <Laying operationId={operationId} onActive={onActive}/>
            <Reduckt operationId={operationId} onActive={onActive}/>
            <Screw operationId={operationId} onActive={onActive}/>
            <ScrewBack operationId={operationId} onActive={onActive}/>
            <ThreadCup operationId={operationId} onActive={onActive}/>
        </Canvas>
    );
};

export default Scene;
