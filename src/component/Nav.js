import styled from "styled-components";
import Menu from "../img/menu.png"
import MenuWhite from "../img/menu-white.png"
import useToggle from "../util/useToggle";
import { Link } from "react-router-dom";
import HomeImg from "../img/home.png"
import ListImg from "../img/list.png"
import CalenderImg from "../img/calender.png"
import CreatorImg from "../img/creator.png"

const Header = styled.header`
    position: fixed;
    z-index: 2;
    top:0;
    width: 100%;
    max-width: 50rem;
    height: 11rem;
    padding:3rem 2rem 1rem;
    background-color: ${props => props.color ? `var(--main-color)` : ``};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    >p {
        margin:0;
        display:flex;
        align-items:flex-end;
        color:#fff;
        font-size:2.8rem;
        font-weight:800;
    }
`
const MenuWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const IconWrap = styled.div`
    position: relative;
    z-index: 1;
    width: fit-content;
    cursor: pointer;
`
const MenuDisplay = styled.div`

    >.background {
        background-color:rgba(0,0,0,0.25);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        display: ${props => props.active ? "block" : "none"};
    }
    >.navMenu {
        min-width: 20rem;
        padding:1.5rem 1.0rem;
        border-radius: 1.0rem;
        background-color: #fff;
        position: relative;
        z-index: 1;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
        display: ${props => props.active ? "block" : "none"};
        >li {
            margin:0 0 .7rem;
            .navItem {
                display:flex;
                align-items: center;
                >img {
                    margin-right: .5rem;
                }
            };
        };
        >li:last-child {
            margin:0 0;
        }
    };
`
const Nav = ({ headWrite, headerColor }) => {
    const [isDisplay, setIsDisplay] = useToggle(false)

    return (
        <Header color={headerColor} >
            <p className="headWrite">{headWrite}</p>
            <MenuWrap>
                <IconWrap onClick={setIsDisplay}>
                    <img alt="" src={headerColor ? MenuWhite : Menu} />
                </IconWrap>
                <MenuDisplay active={isDisplay}>
                    <ul className="navMenu">
                        <li>
                            <Link className="navItem" to="/">
                                <img alt="home" src={HomeImg} />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="navItem" to="/list">
                                <img alt="list" src={ListImg} />
                                <span>List</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="navItem" to="/calender">
                                <img alt="calender" src={CalenderImg} />
                                <span>Calender</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="navItem" to="/creator">
                                <img alt="creator" src={CreatorImg} />
                                <span>Creator</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="background" />
                </MenuDisplay>
            </MenuWrap>
        </Header>
    )
}
export default Nav;