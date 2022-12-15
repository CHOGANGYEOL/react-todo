import { useState } from "react";
import styled from "styled-components";
import BtnActive from "../img/btn-active.png"
import BtnDefult from "../img/btn-defult.png"
import BtnDelete from "../img/btn-delete.png"
import useToggle from "../util/useToggle";

const TodoItemContainer = styled.div`
    position: relative;
`

const TodoItemWrap = styled.div`
    margin-bottom:1rem;
    position: relative;
    z-index: 1;
    width: 100%;
    border-radius:1rem;
    background-color: #fff;
    padding:2.0rem 1.4rem 0.6rem; 
    display:flex;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);
    transition: 0.5s all;
    transform:translateX(${props => props.click ? "-6.0rem" : "0"});
`
const TodoTitle = styled.p`
    font-size:1.8rem;
    margin: 0 0 0rem;
    font-size:1.8rem;
    font-weight: bold;
    transition:0.5s all;
    color: ${props => props.color};
    >span {
        margin-right: .7rem;
    }
`
const CompleteImgWrap = styled.div`
    >img {
        width:max-content;
        height: max-content;
        transition:0.5s all;
    }

`
const WriteWrap = styled.div`
    flex:1 1 auto;
    margin-left:1.0rem;
    >span {
        color:var(--sub-background-color);
        font-size: 1.2rem;
        font-weight: bold;
        position: relative;
        top:-.4rem;
    }
`
const Delete = styled.div`
    position:absolute;
    right: 0%;
    top:50%;
    transform:translateY(-45%);
`


const TodoItem = ({ item, handleDelete }) => {
    const [isTodoItemActive, setIsTodoItemActive] = useToggle(false);
    const [isBtnActive, setIsBtnActive] = useState(false);

    const btnHandler = () => {
        setIsBtnActive(!isBtnActive)
        item.isComplete = (isBtnActive)
    }

    return (
        <TodoItemContainer>
            <TodoItemWrap click={isTodoItemActive}>
                <CompleteImgWrap
                    className="isComplete"
                    onClick={btnHandler}>
                    <img
                        alt=""
                        src={item.isComplete ? BtnActive : BtnDefult} />
                </CompleteImgWrap>
                <WriteWrap
                    onClick={setIsTodoItemActive}
                >
                    <TodoTitle color={item.isComplete ? `var(--sub-background-color)` : `var(--font-color)`}>
                        <span>{item.time}</span>{item.title}
                    </TodoTitle>
                    <span>{item.day}</span>
                </WriteWrap>
            </TodoItemWrap>
            <Delete onClick={() => { handleDelete(item.id) }}>
                <img alt="BtnDelete" src={BtnDelete} />
            </Delete>
        </TodoItemContainer>
    )
}
export default TodoItem

