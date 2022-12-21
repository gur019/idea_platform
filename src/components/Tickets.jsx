import React from 'react';
import '../styles/tickets.scss';
import IdeaButton from './UI/button/IdeaButton';

const Tickets = () => {
    return (
        <div className='tickets'>
            <div>
                <div>turkish airlines</div>
                <IdeaButton>Купить <br/> за 21 032₽</IdeaButton>
            </div>
            {/* <div>sdfsdf</div> */}
        </div>
    );
};

export default Tickets;