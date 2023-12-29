import React from 'react';
import './montsStyles.css';

const Months = () => {
    const currentDate = new Date();
    const fiftyWeeksAgo = new Date(currentDate);
    fiftyWeeksAgo.setDate(currentDate.getDate() - 50 * 7);

    const monthName = [
        'Янв.',
        'Февр.',
        'Март',
        'Апр.',
        'Май',
        'Июнь',
        'Июль',
        'Авг.',
        'Сент.',
        'Окт.',
        'Нояб.',
        'Дек.',
    ];

    const monthsToShow = monthName.slice(fiftyWeeksAgo.getMonth()).concat(monthName.slice(0, fiftyWeeksAgo.getMonth()));

    return (
        <div className="month-container">
            {monthsToShow.map((item, index) => (
                <p key={item} className={`month ${index === fiftyWeeksAgo.getMonth() ? 'current-month' : ''}`}>
                    {item}
                </p>
            ))}
        </div>
    );
};

export default Months;