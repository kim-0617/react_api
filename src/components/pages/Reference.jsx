import React, { useState, useEffect } from 'react'
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';

import { Title } from '../layout/Title';
import { ReferCont } from '../include/ReferCont';
import { Contact } from '../layout/Contact';

export const Reference = () => {
    const [references, setReferences] = useState([]);
    useEffect(() => {
        fetch("https://kim-0617.github.io/react_api/src/utils/reference.json")
            .then(response => response.json())
            .then(result => setReferences(result.cssRefer))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["REFERENCE", "BOOK"]} />
                {references.length === 0 ? null : <ReferCont result={references} />}
                <Contact />
            </Contents>
            <Footer />
        </>
    );
}