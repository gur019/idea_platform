import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { appSetTransplantsAll } from './store/actions/app/appActions';

const FiltersNumberOfTransfers = () => {

    const dispatch = useDispatch();

    const transplantsAll = useSelector((state) => state.app.transplantsAll, shallowEqual);

    const transplants = [ 0, 1, 2, 3 ];

    const [isCheckAll, setIsCheckAll] = useState(false);

    const toggleStatus = (status) => {
        if (transplantsAll.includes(status)) {
            dispatch(appSetTransplantsAll(transplantsAll.filter((s) => s !== status)));
        } else {
            dispatch(appSetTransplantsAll([...transplantsAll, status]));
        }
    };

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        if (!isCheckAll) {
            dispatch(appSetTransplantsAll(transplants));
        } else{
            dispatch(appSetTransplantsAll([]));
        }
    };


    return (
        <div className="numberOfTransfers">
            <div className='numberOfTransfers__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <form className='numberOfTransfers__form'>

                <label className='numberOfTransfers__btns'>
                    <input type="checkbox" onChange={handleSelectAll} checked={isCheckAll} />
                    <span>Все</span>
                </label>

                {transplants.map((status, index) => (
                    <label key={index} className='numberOfTransfers__btns'>
                        <input
                            type="checkbox"
                            checked={transplantsAll.includes(status)}
                            onChange={() => toggleStatus(status)}
                        />
                        <span>
                            {
                                status === 0 && 'Без пересадок' || 
                                status === 1 && '1 пересадка' ||
                                status === 2 && '2 пересадки' ||
                                status === 3 && '3 пересадки' 
                            }
                        </span>
                    </label>
                ))}

            </form>
        </div>
    );
};

export default FiltersNumberOfTransfers;