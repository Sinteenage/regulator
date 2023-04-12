import React from 'react';

import classes from './styles/app.module.scss';

import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';

const App: React.FC = () => {

    return (
        <main className={classes.main}>
            <Header/>
            <section className={classes.main__section}>
                <Nav/>
            </section>
        </main>
    );
};

export default App;
