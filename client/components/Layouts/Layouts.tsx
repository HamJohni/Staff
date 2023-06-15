import React, {ReactNode} from 'react';
import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";

const Layouts = ({children}: ReactNode) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layouts;