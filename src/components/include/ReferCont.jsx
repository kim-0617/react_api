import React from 'react';


const ReferText = ({ data }) => {
    return (
        <li>
            <a href="/">
                <span className='num'>{data.id}</span>
                <span className='name'>{data.title}</span>
                <span className='desc'>{data.desc}</span>
                <span className='star'>{data.use}</span>
            </a>
        </li>
    );
}

export const ReferCont = ({result}) => {
    console.log(result)
    return (
        <section className="cont__refer">
            <div className="container">
                <div className="refer__inner">
                    <h2>CSS</h2>
                    <ul className='refer__list'>
                        {result.map((data, index) => {
                            return <ReferText key={index} data={data} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}