import React, { useCallback, useState, lazy, Suspense } from 'react';

import classes from './styles/app.module.scss';

import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Spinner } from './components/spinner/Spinner';
// import { Scene } from './components/scene/Scene';

const App: React.FC = () => {
    
    const [operationId, setOperation] = useState('');
    const [active, setActive] = useState(false);

    const Scene = lazy(() => import('./components/scene/Scene'));

    const handleOpetationChange = useCallback((id: string) => {
        setActive(true);
        setOperation(id);
    }, []);

    return (
        <main className={classes.main}>
            <Header/>
            <section className={classes.main__section}>
                <Nav onChange={handleOpetationChange} active={active}/>
                <Suspense fallback={<Spinner/>}>
                    <Scene operationId={operationId} onActive={setActive}/>
                </Suspense>
            </section>
        </main>
    );
};

export default App;
