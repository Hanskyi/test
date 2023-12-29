import React, {useCallback, useEffect, useState} from 'react';
import CellItem from "../CellItem/СellItem";
import './cellsStyle.css';
import Months from "../Months/Months";
import DaysOfTheWeek from "../DaysOfTheWeek/DaysOfTheWeek";
import axiosApi from "../../axiosApi";
import {ArrData, Data} from "../../types";

const Cells = () => {
    const [calendar, setCalendar] = useState<ArrData>([])
    const fetchData = useCallback(async () => {
        try {
            const {data} = await axiosApi.get<Data>('test/calendar.json');
            const newArrData = Object.entries(data)
            setCalendar(newArrData)
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            console.log('Success');
        }
    }, []);

    const today = new Date();

    let currentDate = new Date(today);

    const allDaysFormatted: string[] = [];

    const formatDate = (date: Date) => {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yy = String(date.getFullYear());
        return `${yy}-${mm}-${dd}`;
    }

    for (let i = 0; i < 7 * 50; i++) {
        allDaysFormatted.unshift(formatDate(currentDate));
        currentDate.setDate(currentDate.getDate() - 1);
    }

    useEffect(() => {
         void  fetchData();
        }, [fetchData])

    return (
        <div>
            <div className="month-wrapper">
                <Months/>
            </div>
            <div className="week-wrapper">
                <DaysOfTheWeek/>
                <div className="cells">
                    {Array.from({length: 357}, (_, index) => {
                        return  index > 6 ? <CellItem key={index} date={allDaysFormatted[index]} calendar={calendar}/> : <CellItem/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Cells;