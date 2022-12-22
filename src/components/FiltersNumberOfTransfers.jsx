import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { appSetTransplantsAll } from './store/actions/app/appActions';

const FiltersNumberOfTransfers = () => {

    const dispatch = useDispatch();

    // const transplantsAll= useSelector((state) => state.app.transplantsAll, shallowEqual);
    // const transplants0= useSelector((state) => state.app.transplants0, shallowEqual);
    // const transplants1= useSelector((state) => state.app.transplants1, shallowEqual);
    // const transplants2= useSelector((state) => state.app.transplants2, shallowEqual);
    // const transplants3= useSelector((state) => state.app.transplants3, shallowEqual);

    const transplants = [
        { id: 0, title: 'Без пересадок' },
        { id: 1, title: '1 пересадка' },
        { id: 2, title: '2 пересадки' },
        { id: 3, title: '3 пересадки' }
    ]

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(transplants.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, Number(id)]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== Number(id)));
        }
    };

    useEffect(() => {
        dispatch(appSetTransplantsAll(isCheck));
    }, [isCheck]);


    // const [data, setData] = useState(transplants);

    // function handleChange(e) {
    //     const value = e.target.value;
    //     const modifiedData = [...data];
    //     modifiedData.map((item) => {
    //         item.isChecked = item.id === +value;
    //         return item;
    //     });
    //     setData(modifiedData);
    //     // console.log(modifiedData);

    //     //   dispatch(appSetTransplants(transfer.stop)
    //     console.log(value);
    //     console.log(modifiedData);

    // }

    return (
        <div className="numberOfTransfers">
            <div className='numberOfTransfers__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <form className='numberOfTransfers__form'>

                <label className='numberOfTransfers__btns'>
                    <input type="checkbox" id='selectAll' name='selectAll' onChange={handleSelectAll} checked={isCheckAll} />
                    <span>Все</span>
                </label>

                {transplants.map(({ id, title }) =>
                    <label key={id} className='numberOfTransfers__btns'>
                        <input type="checkbox" id={id} name={title} onChange={handleClick} checked={isCheck.includes(id)} />
                        <span>{title}</span>
                    </label>
                )}

                {/* <label className='numberOfTransfers__btns'>
                    <input type="checkbox" checked={transplantsAll} onChange={() => dispatch(appSetTransplantsAll(!transplantsAll))} />
                    <span>Все</span>
                </label>

                <label className='numberOfTransfers__btns'>
                    <input type="checkbox" checked={transplants0} onChange={() => dispatch(appSetTransplants0(!transplants0))} />
                    <span>Без пересадок</span>
                </label>

                <label className='numberOfTransfers__btns'>
                    <input type="checkbox" checked={transplants1} onChange={() => dispatch(appSetTransplants1(!transplants1))} />
                    <span>1 пересадка</span>
                </label>

                <label className='numberOfTransfers__btns'>
                    <input type="checkbox" checked={transplants2} onChange={() => dispatch(appSetTransplants2(!transplants2))} />
                    <span>2 пересадки</span>
                </label>

                <label className='numberOfTransfers__btns'>
                    <input type="checkbox" checked={transplants3} onChange={() => dispatch(appSetTransplants3(!transplants3))} />
                    <span>3 пересадки</span>
                </label> */}

            </form>
        </div>
    );
};

export default FiltersNumberOfTransfers;