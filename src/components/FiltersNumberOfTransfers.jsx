import React , { useState } from 'react';

const FiltersNumberOfTransfers = () => {

    const [transplants, setTransplants] = useState([
        {id: 1, title: 'Все'},
        {id: 2, title: 'Без пересадок'},
        {id: 3, title: '1 пересадка'},
        {id: 4, title: '2 пересадки'},
        {id: 5, title: '3 пересадки'}
    ])

    return (
        <div className="numberOfTransfers">
            <div className='numberOfTransfers__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <form className='numberOfTransfers__form'>

                {transplants.map((transfer) => 
                    <label key={transfer.id} className='numberOfTransfers__btns'>
                        <input type="checkbox"  />
                        <span>{transfer.title}</span>
                    </label>
                )}

            </form>
        </div>
    );
};

export default FiltersNumberOfTransfers;