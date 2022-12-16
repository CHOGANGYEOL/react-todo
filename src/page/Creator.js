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
        <ul>
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
