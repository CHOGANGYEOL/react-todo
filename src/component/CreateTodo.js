import styled from "styled-components";
import BtnEdit from "../img/btn-edit.png"
import BtnClose from "../img/btn-close.png"
import useToggle from "../util/useToggle";
import { useEffect, useState } from "react";
import Input from "./Input";
import { useInput} from "../util/useInput";

const IconWrap = styled.div`
    position: fixed;
    z-index: 1;
    bottom: 2rem;
    right: 2rem;
`
const CreateDisplay = styled.form`
    position: relative;
    z-index: 2;
    >.background {
        background-color:rgba(0,0,0,0.25);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        display: ${props => props.active ? "block" : "none"};
    }

`
const CreateWrap = styled.div`
    background-color: #fff;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);
    padding:0 2rem 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 35rem;
    border-radius: 10px;
    transform:translate(-50%, -50%);
    z-index: 1;
    display: ${props => props.active ? "block" : "none"};
    >.title {
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >span {
            font-size:1.8rem;
            font-weight: 700;
        }
        >button {
            margin:0;
            padding: 0;
            background-color: transparent;
            border:0;
            cursor: pointer;
        }
    }
`

const CreateTodo = () => {
    const [isDisplay, setDisplay] = useToggle(false)
    const [titleValue, titleBind, titleReset] = useInput("")
    const [dateValue, setDateValue] = useState(null)
    const [timeValue, timeBind, timeReset] = useInput("HH:mm:ss")
    const [todoArr, setTodoArr] = useState([]);
    const handleDate = (e) => {
        setDateValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        titleReset();
        setTodoArr()
    }
    useEffect(() => {console.log([titleValue, dateValue, timeValue])},[titleValue])
    return (
        <>
            <IconWrap onClick={setDisplay}>
                <img alt="TodoEdit" src={BtnEdit} />
            </IconWrap>
            <CreateDisplay active={isDisplay}>
                <CreateWrap active={isDisplay}>
                    <div className="title">
                        <span>일정 생성</span>
                        <button onClick={setDisplay}><img src={BtnClose} /></button>
                    </div>
                    <Input label={"제목"} value={titleBind} />
                    <input type={"date"} onChange={handleDate}></input>
                    <input type={"time"} ></input>
                </CreateWrap>   
                <div className="background" />
            </CreateDisplay>
        </>
    )
}

export default CreateTodo