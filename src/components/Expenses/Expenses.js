import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    // const [filteredYear, setFilteredYear] = useState('2020');

    // const filterChangedHandler = (selectedYear) => {
    //     setFilteredYear(selectedYear);
    // };
    let filterYear = '';

    const getFilteredYear = (filteredYear) => {
        console.log("In Expenses.js");
        console.log(filteredYear);
        filterYear = filteredYear;
        return filteredYear;
    }

    return (
            <Card className="expenses">
                <ExpenseFilter filterYear={getFilteredYear} />
                <ExpenseItem year={filterYear} title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem year={filterYear} title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem year={filterYear} title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem year={filterYear} title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
            </Card>
    );
}

export default Expenses;