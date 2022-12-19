import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeFromTodo } from "../actions"
import TodoItem from "./TodoItem";
import { getToday, getTomorrow } from "../util/getDay";
const Wrap = styled.div`
    position:relative;
    background-color: var(--background-color);
    padding:3.0rem 2.0rem;
    min-height: 30rem;
    >h3 {
        font-size:2.0rem;
        margin: 0 0 1.0rem;
        font-weight: 800;
    }
    >.empty {
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`


const TodoWrap = ({ write, date }) => {
    const state = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const handleDelete = (itemId) => {
        dispatch(removeFromTodo(itemId))
    }
    const today = getToday();
    const tomorrow = getTomorrow();
    const [isDate, setIsDate] = useState({});
    useEffect(() => {
        if (date === "all") {
            setIsDate(state.filter(state => state.day !== today && state.day !== tomorrow))
        } else {
            setIsDate(state.filter(state => state.day === date))
        }
    }, [date, state, today, tomorrow])

    return (
        <Wrap>
            <h3>{write}</h3>
            {!isDate.length ? (<div className="empty">일정이 없습니다.</div>) : (<></>)}
            {Array.isArray(isDate) ? isDate.map((item) => (
                <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
            )) : null}
        </Wrap>
    )
}
export default TodoWrap;