import React from 'react';

import classes from './styles/app.module.scss';

import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Scene } from './components/scene/Scene';

const App: React.FC = () => {

    return (
        <main className={classes.main}>
            <Header/>
            <section className={classes.main__section}>
                <Nav/>
                <Scene/>
            </section>
        </main>
    );
};

export default App;
