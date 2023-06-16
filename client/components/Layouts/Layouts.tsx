import React, {ReactNode} from 'react';
import Header from "@/components/Layouts/Header/Header";

const Layouts = ({children}: ReactNode) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layouts;