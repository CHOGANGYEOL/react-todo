import styled from "styled-components";
import Nav from "../component/Nav";
import MainImg from "../img/main__img.png";

const CreateWrap = styled.div`
  padding: 23rem 0 0;
  >.top--wrap {
    text-align: center;
    >h3 {
        font-size: 2.8rem;
        font-weight: 800;
    }
  }
  >.bottom--wrap {
    margin:13rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0 2rem;
    >li {
      text-align: right;
      margin: 0 0 3rem;
      >span {
        color: var(--sub-background-color);
        margin: 0 0 .5rem 0;
        font-size: 1.8rem;
      }
      >p {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
      }
    }
    >li:last-child {
      margin: 0;
    }
  }
`;
const Creator = () => {
  return (
    <>
      <Nav headWrite="Creator" headerColor={"true"} />
      <CreateWrap>
        <div className="top--wrap">
          <img alt="" src={MainImg} />
          <h3>CHOGANGYEOL</h3>
        </div>
        <ul className="bottom--wrap">
          <li>
            <span>github</span>
            <p>CHOGANGYEOL</p>
          </li>
          <li>
            <span>e-mail</span>
            <p>loeygnak@gmail.com</p>
          </li>
        </ul>
      </CreateWrap>
    </>
  );
};

export default Creator;
