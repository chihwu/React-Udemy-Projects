import React, {useState} from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const dropdownChangeHandler = (event) => {
        console.log("In ExpenseFilter.js");
        console.log(event.target.value);
        setFilteredYear(event.target.value);
        props.filterYear(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={filteredYear} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;