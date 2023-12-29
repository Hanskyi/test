import React from 'react';
import './colorNavStyle.css';

const ColorNav = () => {
    return (
        <div className="contributions-nav-container">
            <span className="contributions-nav-text">Меньше</span>
            <div className="no-contributions nav-item"></div>
            <div className="one-to-nine-contributions nav-item"></div>
            <div className="ten-to-nineteen-contributions nav-item"></div>
            <div className="twenty-to-twenty-nine-contributions nav-item"></div>
            <div className="thirty-plus-contributions nav-item"></div>
            <span className="contributions-nav-text">Больше</span>
        </div>
    );
};

export default ColorNav;