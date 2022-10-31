import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';

import { Title } from '../layout/Title';
import { AboutCont } from '../include/AboutCont';
import { Contact } from '../layout/Contact';

export const Unsplash = () => {
    return (
        <>
            <Header />
            <Contents>
                <Title title={["Unsplash", "Reference API"]} />
                <AboutCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
}
