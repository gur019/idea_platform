import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import '../styles/tickets.scss';

import Ticket from './Ticket';

const Tickets = ({ tickets }) => {

    const transplantsAll = useSelector((state) => state.app.transplantsAll, shallowEqual);
    const transplants0 = useSelector((state) => state.app.transplants0, shallowEqual);
    const transplants1 = useSelector((state) => state.app.transplants1, shallowEqual);
    const transplants2 = useSelector((state) => state.app.transplants2, shallowEqual);
    const transplants3 = useSelector((state) => state.app.transplants3, shallowEqual);

    const [ticketState, setTicketState] = useState(tickets.tickets);


    function sortAndFilterTickets(ticket) {

        const data = [...ticket];
        const sort = data.sort((a, b) => (a.price > b.price) ? 1 : -1);
        // const filter = sort.filter((s) => (s.stops === 2));
        // const result = filter;

        setTicketState(sort);

        // console.log([...ticket].filter((asd) => (asd.stops === 0)));
        // setTicketState([...ticket].filter((asd) => (asd.stops === 0)));
    }

    useEffect(() => {
        if (tickets) {
            sortAndFilterTickets(ticketState);
        }
        // console.log(transplantsAll, transplants0, transplants1, transplants2, transplants3);
    }, [tickets]);


    return (
        <div className='tickets'>
            {ticketState.map((ticket) =>
                <Ticket key={ticket.id} ticket={ticket} />
            )}

        </div>
    );
};

export default Tickets;