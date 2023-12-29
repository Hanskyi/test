import React from 'react';
import './montsStyles.css';

const Month = () => {
    const monthName = ['Апр.', 'Май','Июнь','Июль','Авг.','Сент.','Окт.','Нояб.','Дек.','Янв','Февр.','Март',]
    return (
        <div className="month-container">
            {monthName.map(item => {
                return <p key={item} className="month">{item}</p>
            })}
        </div>
    );
};

export default Month;