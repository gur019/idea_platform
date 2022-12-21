import React from 'react';
import '../styles/filters.scss'
import FilterCurrency from './FilterCurrency';
import FiltersNumberOfTransfers from './FiltersNumberOfTransfers';

const Filters = () => {
    return (
        <div className='filters'>
            <div className='filters__block'>
                <FilterCurrency />
                <FiltersNumberOfTransfers />
            </div>
        </div>
    );
};

export default Filters;