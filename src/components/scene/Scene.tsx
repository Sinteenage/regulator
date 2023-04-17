import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, useEnvironment} from '@react-three/drei';

import { Controller } from './regilator/Controller';
import { Pipes } from './regilator/Pipes';
import { Corpus } from './regilator/Corpus';
import { BackCup } from './regilator/BackCup';
import { Bolts } from './regilator/Bolts';
import { FrontCup } from './regilator/FrontCup';
import { Laying } from './regilator/Laying';
import { Reduckt } from './regilator/Reduckt';
import { Screw } from './regilator/Screw';
import { ScrewBack } from './regilator/ScrewBack';
import { ThreadCup } from './regilator/ThreadCup';

export const Scene: React.FC = () => {
    const envMap = useEnvironment({files: '/assets/textures/boiler_room_1k.hdr'});

    return (
        <Suspense fallback={null}>
            <Canvas>
                <OrbitControls target={[0, 2, -5]} maxPolarAngle={1.45}/>

                <PerspectiveCamera makeDefault fov={20} position={[40, 0, 0]}/>

                <ambientLight intensity={0.1}/>

                <directionalLight color='white' position={[10, 8, 5]} intensity={1}/>

                <Environment map={envMap}/>

                <Controller/>
                <Pipes/>
                <Corpus/>
                <BackCup/>
                <Bolts/>
                <FrontCup/>
                <Laying/>
                <Reduckt/>
                <Screw/>
                <ScrewBack/>
                <ThreadCup/>
            </Canvas>
        </Suspense>
    );
};
