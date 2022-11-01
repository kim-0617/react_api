import React from 'react';

const mainInfo = [
    { text: "we provide" },
    { text: "visual coding" },
    { text: "solutions" },
    { text: "for you API" },
];

const MainText = ({ data }) => {
    return (
        <div>
            {data}
        </div>
    );
}

function MainCont() {
    return (
        <section className="cont__main">
            <div className="container">
                <div className="main__inner">
                    {mainInfo.map((text, index) => {
                        return <MainText key={index} data={text.text} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default MainCont