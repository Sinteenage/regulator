import React from 'react';

import classes from './header.module.scss';

export const Header: React.FC = () => {

    return (
        <header className={classes.header}>
            <h1 className={classes.header__title}>
                Pressure Regulator
            </h1>
            <h2 className={classes.header__subtitle}>
                Disassembly should be carried out only after 
                complete removal of pressure from the regulator
            </h2>
        </header>
    );
};