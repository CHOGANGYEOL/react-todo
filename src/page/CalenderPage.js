import { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar'
import styled from 'styled-components'
import Nav from '../component/Nav'
import 'react-calendar/dist/Calendar.css';
import TodoWrap from '../component/TodoWrap';
import moment from 'moment';
import CreateTodo from '../component/CreateTodo';

const CalendarPageWrap = styled.div`
    padding: 11rem 0 0;
    background-color: var(--background-color);
`
const CalendarWrap = styled.div`
padding:3rem 2rem 0;
`
const CalenderPage = () => {
    const [value, onChange] = useState(new Date());
    const [isDate, setIsDate] = useState('');

    useEffect(() => {
        const date = value;
        const year = date.getFullYear()
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + (date.getDate())).slice(-2);

        setIsDate(`${year}-${month}-${day}`);
    }, [value])
    return (
        <CalendarPageWrap>
            <Nav headWrite='Calendar' headerColor="true" />
            <CalendarWrap>
                <Calendar 
                onChange={onChange}
                formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
                value={value} 
                locale="en-EN"/>
            </CalendarWrap>
            <TodoWrap write={`${isDate.slice(5, 7)}월 ${isDate.slice(8)}일`} date={isDate} />
            <CreateTodo />
        </CalendarPageWrap>
    )
}

export default CalenderPage