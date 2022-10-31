import React from 'react'

export const Title = ({ title }) => {
    return (
        <section className='cont__title'>
            <div className='container'>
                <h1>
                    <strong>{title[0]}</strong>
                    <em>{title[1]}</em>
                </h1>
            </div>
        </section>
    )
}