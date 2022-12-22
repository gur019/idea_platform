import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const FiltersNumberOfTransfers = () => {

    const dispatch = useDispatch();

    // const transplantsAll= useSelector((state) => state.app.transplantsAll, shallowEqual);
    // const transplants0= useSelector((state) => state.app.transplants0, shallowEqual);
    // const transplants1= useSelector((state) => state.app.transplants1, shallowEqual);
    // const transplants2= useSelector((state) => state.app.transplants2, shallowEqual);
    // const transplants3= useSelector((state) => state.app.transplants3, shallowEqual);

    const transplants = [
        { id: 1, title: 'Все' },
        { id: 2, title: 'Без пересадок' },
        { id: 3, title: '1 пересадка' },
        { id: 4, title: '2 пересадки' },
        { id: 5, title: '3 пересадки' }
    ]

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);

    // const handleSelectAll = (e) => {
    //     setIsCheckAll(!isCheckAll);
    //     setIsCheck(transplants.map(li => li.id));
    //     if (isCheckAll) {
    //         setIsCheck([]);
    //     }
    // };

    // https://codesandbox.io/s/react-select-all-checkbox-jbub2?file=/src/index.js:968-977

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        console.log([...isCheck, id]);
        if (!checked) {
            console.log(isCheck.filter(item => item !== id));
            // setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    // console.log(isCheck);

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