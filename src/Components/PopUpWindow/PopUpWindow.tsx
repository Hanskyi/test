import React from 'react';
import './popUpWindow.css';

interface Props {
    number?: number,
    date?: string,
}
const PopUpWindow: React.FC<Props> = ({number,date}) => {
    return (
            <div className="pop-up-content">
                <span className="pop-up-window-main-text">{number}</span>
                <span className="pop-up-window-sub-text">{date}</span>
            </div>
    );
};

export default PopUpWindow;