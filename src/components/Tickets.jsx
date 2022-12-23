import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import '../styles/tickets.scss';

import Ticket from './Ticket';

const Tickets = ({ tickets }) => {

    const transplantsAll = useSelector((state) => state.app.transplantsAll, shallowEqual);

    const [sortedArr, setSortedArr] = useState([]);

    function sortedTicket(ticket) {
        const data = [...ticket];
        const sort = data.sort((a, b) => (a.price > b.price) ? 1 : -1);
        setSortedArr(sort);
    }


    const filteredTicked = useMemo(() => {

        if (transplantsAll.length === 0) {
            return sortedArr;
        }

        return sortedArr.filter(s => transplantsAll.includes(s.stops));

    }, [transplantsAll, sortedArr]);


    useEffect(() => {
        sortedTicket(tickets.tickets);
    }, [tickets.tickets]);


    return (
        <div className='tickets'>
            {filteredTicked.map((ticket) =>
                <Ticket key={ticket.id} ticket={ticket} />
            )}



        </div>
    );
};

export default Tickets;