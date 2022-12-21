import React from 'react';
import IdeaButton from './UI/button/IdeaButton';

const Ticket = ({ ticket }) => {

    return (
        <div className='ticket'>
            <div className='ticket__left'>
                <div className='ticket__logo'></div>
                <IdeaButton>Купить <br /> за {ticket.price}₽</IdeaButton>
            </div>
            <div className='ticket__right'>

                <div className='ticket__timeBlock'>
                    <div className='ticket__time'>{ticket.departure_time}</div>
                    <div className='ticket__transfer'>
                        <div className='ticket__transferText'>
                            {ticket.stops !== 0 ?
                                ticket.stops === 1 ? `${ticket.stops} ПЕРЕСАДКА` : `${ticket.stops} ПЕРЕСАДКИ`
                                :
                                'БЕЗ ПЕРЕСАДОК'
                            }
                        </div>
                        <div className='ticket__transferSeparator'></div>
                    </div>
                    <div className='ticket__time'>{ticket.arrival_time}</div>
                </div>

                <div className='ticket__airportBlock'>
                    <div className='ticket__airportNameAndDate'>
                        <div className='ticket__airportName'>{ticket.origin}, {ticket.origin_name}</div>
                        <div className='ticket__airportDate'>{ticket.departure_date}</div>
                    </div>
                    <div className='ticket__airportNameAndDate'>
                        <div className='ticket__airportName'>{ticket.destination_name}, {ticket.destination}</div>
                        <div className='ticket__airportDate ticket__airportDateRight'>{ticket.arrival_date}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ticket;