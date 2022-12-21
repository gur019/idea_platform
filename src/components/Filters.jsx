import React from 'react';
import '../styles/filters.scss'
import FilterCurrency from './FilterCurrency';
import FiltersNumberOfTransfers from './FiltersNumberOfTransfers';

const Filters = () => {
    return (
        <div className='filters'>

            <FilterCurrency />

            <FiltersNumberOfTransfers/>
            

        </div>
    );
};

export default Filters;