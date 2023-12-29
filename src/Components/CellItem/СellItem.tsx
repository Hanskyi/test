import React, {useEffect, useState} from 'react';
import './сellItemStyle.css';
import {ArrData} from "../../types";
import PopUpWindow from "../PopUpWindow/PopUpWindow";

interface Props {
    date?: string;
    calendar?: ArrData;
}

const CellItem: React.FC<Props> = ({date, calendar}) => {
    const [oneToNineContributions, setOneToNineContributions] = useState(false)
    const [tenToNineteenContributions, setTenToNineteenContributions] = useState(false)
    const [twentyToTwentyNineContributions, setTwentyToTwentyNineContributions] = useState(false)
    const [thirtyPlusContributions, setThirtyPlusContributions] = useState(false)
    const [openPopUpWindow, setOpenPopUpWindow] = useState(false)
    const [number, setNumber] = useState<number | null>(null)

    useEffect(() => {
        calendar?.forEach(item => {
            if (item[0] === date && item[1] >= 1 && item[1] <= 9) {
                setOneToNineContributions(true)
                setNumber(item[1])
            }
            if (item[0] === date && item[1] >= 10 && item[1] <= 19) {
                setTenToNineteenContributions(true)
                setNumber(item[1])
            }
            if (item[0] === date && item[1] >= 20 && item[1] <= 29) {
                setTwentyToTwentyNineContributions(true)
                setNumber(item[1])
            }
            if (item[0] === date && item[1] >= 30) {
                setThirtyPlusContributions(true)
                setNumber(item[1])
            }
        });
    }, [calendar, date])

    const handleOpenClosePopUpWindow = () => {
        setOpenPopUpWindow(!openPopUpWindow);
    }
    return (
        <>
            <div
                className={`
            сell-item no-contributions 
            ${oneToNineContributions ? 'one-to-nine-contributions' : ''}
            ${tenToNineteenContributions ? 'ten-to-nineteen-contributions' : ''}
            ${twentyToTwentyNineContributions ? 'twenty-to-twenty-nine-contributions' : ''}
            ${thirtyPlusContributions ? 'thirty-plus-contributions' : ''}
        `}
                onClick={handleOpenClosePopUpWindow}
            >
                <div className="pop-up-window"> {openPopUpWindow &&
                    <PopUpWindow key={date} number={number!} date={date}/>}
                </div>
            </div>
        </>
    );
};

export default CellItem;
