import React, { MouseEvent, useCallback, useState } from 'react';

import classes from './nav.module.scss';

import { operations } from '../../types';

interface navProps {
    onChange: (operationId: string) => void;
    active: boolean;
}

export const Nav: React.FC<navProps> = ({ onChange, active=false }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        counter < operations.length - 1 ? setCounter(counter + 1) : setCounter(0);

        onChange(event.currentTarget.id);

    }, [counter, onChange]);

    return (
        <nav className={classes.nav}>
            <h2 className={classes.nav__title}>Regulator disassembly instruction</h2>
            {
                operations.map(item => {
                    return <button
                        className={classes.nav__button}
                        key={item.key}
                        id={item.key}
                        onClick={handleClick}
                        disabled={active || operations[counter].key !== item.key}
                    >
                        {item.description}
                    </button>;
                })
            }
        </nav>
    );
};