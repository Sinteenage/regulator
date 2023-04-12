import React, { MouseEvent, useCallback, useRef, useState } from 'react';

import classes from './nav.module.scss';

import { operations } from '../../types';

export const Nav: React.FC = () => {

    const keyRef = useRef(0);

    const disabledResult = useCallback(() => {
        return operations.map(item => {
            return operations[keyRef.current].key !== item.key && item.key;
        });
    }, []);

    const [disabled, setDisabled] = useState(disabledResult);

    const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        keyRef.current < operations.length - 1 ? keyRef.current++ : keyRef.current = 0;

        setDisabled(disabledResult);
    }, [disabledResult]);

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
                        disabled={disabled.includes(item.key)}
                    >
                        {item.description}
                    </button>;
                })
            }
        </nav>
    );
};