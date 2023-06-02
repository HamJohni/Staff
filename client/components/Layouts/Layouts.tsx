import React, {ReactNode} from 'react';
import main from './Layouts.module.scss'

const Layouts = ({children}: ReactNode) => {
    return (
        <div className={main.container}>
            {children}
        </div>
    );
};

export default Layouts;