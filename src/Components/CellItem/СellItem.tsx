import React from 'react';
import './сellItemStyle.css';

interface Props {
    number: number
}
const CellItem: React.FC<Props> = ({number}) => {
    return (
        <div className="сell-item no-contributions">{number}</div>
    );
};

export default CellItem;