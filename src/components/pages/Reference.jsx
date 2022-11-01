import React from 'react'
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';

import { Title } from '../layout/Title';
import { ReferCont } from '../include/ReferCont';
import { Contact } from '../layout/Contact';

export const Reference = () => {
    return (
        <>
            <Header />
            <Contents>
                <Title title={["REFERENCE", "BOOK"]} />
                <ReferCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
}