import React from 'react';
import './daysOfTheWeek.css'

const DaysOfTheWeek = () => {
   const daysOfTheWeek = ['Пн','Вт', 'Ср','Чт', 'Пт', 'Сб', 'Вс']
    return (
        <div className="days-of-the-week-container">
            {daysOfTheWeek.map(item => {
                return <p key={item} className="days-of-the-week">{item}</p>
            })}
        </div>
    );
};

export default DaysOfTheWeek;