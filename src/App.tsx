import React, { useCallback, useState } from 'react';

import classes from './styles/app.module.scss';

import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Scene } from './components/scene/Scene';

const App: React.FC = () => {
    
    const [operationId, setOperation] = useState('');
    const [active, setActive] = useState(false);

    const handleOpetationChange = useCallback((id: string) => {
        setActive(true);
        setOperation(id);
    }, []);

    return (
        <main className={classes.main}>
            <Header/>
            <section className={classes.main__section}>
                <Nav onChange={handleOpetationChange} active={active}/>
                <Scene operationId={operationId} onActive={setActive}/>
            </section>
        </main>
    );
};

export default App;
