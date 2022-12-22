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


    // const sortedTicket = (ticket) => {
    //     const data = [...ticket];
    //     const sort = data.sort((a, b) => (a.price > b.price) ? 1 : -1);

    //     return sort;
    // }

    const [test, setTest] = useState(0)

    function sortAndFilterTickets(ticket, num) {

        // console.log(num,'num');

        setTicketState(ticket.filter((asd) => (asd.stops === num)));
        console.log(ticket,'ticket');


        // const filter = sort.filter((s) => (s.stops === 2));
        // const result = filter;


        // console.log([...ticket].filter((asd) => (asd.stops === 0)));
        // setTicketState([...ticket].filter((asd) => (asd.stops === 0)));
    }

    // useEffect(() => {
    //     if (tickets) {
    //         sortAndFilterTickets(ticketState);
    //         console.log("!!!!!!!!!!!");
    //     }

    // }, [tickets]);

    // useEffect(() => {
    //     // if (transplantsAll) {
    //         // console.log(transplantsAll, 'transplantsAll');
    //         sortAndFilterTickets(ticketState, test);
    //     // }
    // }, [test]);


    return (
        <div className='tickets'>
            <button onClick={() => setTest(test + 1)}>asd</button> {test}
            {ticketState.map((ticket) =>
                <Ticket key={ticket.id} ticket={ticket} />
            )}

        </div>
    );
};

export default Tickets;