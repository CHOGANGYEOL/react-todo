import { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar'
import styled from 'styled-components'
import Nav from '../component/Nav'
import 'react-calendar/dist/Calendar.css';
import { getToday } from '../util/getDay'
import TodoWrap from '../component/TodoWrap';

const CalendarWrap = styled.div`
    padding: 13rem 0 0;
    background-color: var(--background-color);
`
const CalenderPage = () => {
    const [value, onChange] = useState(new Date());
    const [isDate, setIsDate] = useState('');
    useEffect(() => {
        const date = value;
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
    
        setIsDate(`${month}월 ${day}일`);
    }, [value])
    return (
        <CalendarWrap>
            <Nav headWrite='Creator' headerColor="true" />
            <Calendar onChange={onChange} value={value} />
            <TodoWrap write={isDate} date={isDate} />
        </CalendarWrap>
    )
}

export default CalenderPage