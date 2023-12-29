import React, {useEffect, useState} from 'react';
import './сellItemStyle.css';
import { ArrData } from "../../types";

interface Props {
    date?: string;
    calendar?: ArrData;
}

const CellItem: React.FC<Props> = ({ date, calendar }) => {
    const [oneToNineContributions, setOneToNineContributions] = useState(false)
    const [tenToNineteenContributions, setTenToNineteenContributions] = useState(false)
    const [twentyToTwentyNineContributions, setTwentyToTwentyNineContributions] = useState(false)
    const [thirtyPlusContributions, setThirtyPlusContributions] = useState(false)

 useEffect(()=>{
     calendar?.forEach(item => {
         if (item[0] === date && item[1] >= 1 && item[1] <= 9 ) {
             setOneToNineContributions(true)
             console.log(1)
         }
         if (item[0] === date && item[1] >= 10 && item[1] <= 19) {
             setTenToNineteenContributions(true)
         }
         if (item[0] === date && item[1] >=20 && item[1] <= 29) {
             setTwentyToTwentyNineContributions(true)
         }
         if (item[0] === date && item[1] >= 30) {
             setThirtyPlusContributions(true)
         }
     });
 },[calendar, date])

    return (
        <div className={`сell-item no-contributions 
        ${oneToNineContributions ? 'one-to-nine-contributions' : ''}
        ${tenToNineteenContributions ? 'ten-to-nineteen-contributions' : ''}
        ${twentyToTwentyNineContributions ? 'twenty-to-twenty-nine-contributions' : ''}
        ${thirtyPlusContributions ? 'thirty-plus-contributions' : ''}
        
        `}>
            {date}
        </div>
    );
};

export default CellItem;
