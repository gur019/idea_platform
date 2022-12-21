import React, { Fragment, useState } from 'react';

const FilterCurrency = () => {

    const [currency, setCurrency] = useState([
        {id: 1, name: 'RUB'},
        {id: 2, name: 'USD'},
        {id: 3, name: 'EUR'}
    ])

    return (
        <div className='currency'>
            <div className='currency__title'>ВАЛЮТА</div>
            <form className='currency__form'>

                {currency.map((money) =>
                    <Fragment key={money.id}>
                        <input hidden type="radio" name='currency' id={money.name} />
                        <label htmlFor={money.name} className='currency__btns'>{money.name}</label>
                    </Fragment>
                )}


            </form>
        </div>
    );
};

export default FilterCurrency;