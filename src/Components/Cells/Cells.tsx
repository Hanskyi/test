import React from 'react';
import CellItem from "../CellItem/СellItem";
import './cellsStyle.css';
import Month from "../Month/Month";
import DaysOfTheWeek from "../DaysOfTheWeek/DaysOfTheWeek";

const Cells = () => {
    return (
        <div>
            <div className="month-wrapper">
                <Month/>
            </div>
            <div className="week-wrapper">
                <DaysOfTheWeek/>
                <div className="cells">
                    {Array.from({length: 357}, (_, index) => (
                        <CellItem key={index} number={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cells;