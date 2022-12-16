import styled from "styled-components";
import BtnEdit from "../img/btn-edit.png";
import BtnClose from "../img/btn-close.png";
import useToggle from "../util/useToggle";
import { useEffect, useState } from "react";
import Input from "./Input";
import { useInput } from "../util/useInput";
import { useDispatch, useSelector } from "react-redux";
import { createFromTodo } from "../actions";

const IconWrap = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 2rem;
  right: 2rem;
`;
const CreateDisplay = styled.form`
  position: relative;
  z-index: 2;
  > .background {
    background-color: rgba(0, 0, 0, 0.25);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;
const CreateWrap = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 0 2rem 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 35rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: ${(props) => (props.active ? "block" : "none")};
  > .title {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  > .input {
    width: 100%;
    margin: 1.5rem 0 2rem;
    > label {
      display: block;
      font-size: 1.4rem;
      margin-bottom: .3rem;
    }
    > input {
      font-size: 1.6rem;
      width: 100%;
      height: 3rem;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid var(--sub-background-color);
      padding: 0.5rem;
      transition:0.3s all;
    }
    > input:focus {
      border-bottom: 1px solid var(--main-color);
      outline: 0;
    }
  }
  >.dateWrap {
    width: 100%;
    margin-bottom: 2rem;
    >label {
      display: block;
      font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    >input {
        border:0;
        background-color: var(--background-color);
        border-radius: 5px;
        padding:1rem;
        height: 2.5rem;
        font-size: 1.2rem;
    }
  }
`;
const SubmitBtn = styled.button`
width: 100%;
height: 4rem;
border-radius: 10px;
background-color: ${(props) => props.color === "true" ? "var(--main-color)" : "var(--sub-background-color)"};
pointer-events: ${(props) => props.color === "true" ? "unset" : "none"};
font-size: 1.4rem;
color: #fff;
font-weight: 700;
transition:0.3s all;
border: 0;

`
const CloseBtn = styled.div`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const CreateTodo = () => {
  const state = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [isDisplay, setDisplay] = useToggle(false);
  const [titleValue, titleBind, titleReset] = useInput("");
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [todoArr, setTodoArr] = useState({});
  const handleDate = (e) => {
    setDateValue(e.target.value);
  };

  const handleTime = (e) => {
    setTimeValue(e.target.value);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    titleReset();
    setDateValue(null);
    setTimeValue(null);
    setDisplay(false);

    dispatch(createFromTodo(todoArr));
  };
  useEffect(() => {
    setTodoArr({
      id: state.length + 1,
      day: dateValue,
      time: timeValue,
      title: titleValue,
      isComplete: false,
    });
    if(dateValue && timeValue && (titleValue.length !== 0)) {
        setSubmit(true)
    } else {setSubmit(false)}
  }, [dateValue, setSubmit, state.length, timeValue, titleValue]);
  return (
    <>
      <IconWrap onClick={setDisplay}>
        <img alt="TodoEdit" src={BtnEdit} />
      </IconWrap>
      <CreateDisplay active={isDisplay}>
        <CreateWrap active={isDisplay}>
          <div className="title">
            <span>일정 생성</span>
            <CloseBtn onClick={setDisplay}>
              <img alt="닫기" src={BtnClose} />
            </CloseBtn>
          </div>
          <Input label={"제목"} value={titleBind} />
          <div className="dateWrap">
            <label>날짜</label>
            <input type={"date"} onChange={handleDate}></input>
            <input type={"time"} onChange={handleTime}></input>
          </div>
          <SubmitBtn 
            color={submit ? "true" : "false"}
            type="submit" 
            onClick={handleCreate}>
            일정 생성
          </SubmitBtn>
        </CreateWrap>
        <div className="background" />
      </CreateDisplay>
    </>
  );
};

export default CreateTodo;
