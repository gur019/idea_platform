import React from 'react';
import '../styles/tickets.scss';

import tickets from '../tickets.json';
import Ticket from './Ticket';

const Tickets = () => {
    

console.log(tickets.tickets.length);


    return (
        <div className='tickets'>

            {tickets.tickets.map((ticket) => 
                <Ticket key={ticket.id} ticket={ticket}/>
            )}
            
        </div>
    );
};

export default Tickets;