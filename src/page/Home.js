import MainImg from '../img/main__img.png'
import MainSlide from '../component/MainSlide'
import TodoWrap from '../component/TodoWrap'
import styled from 'styled-components'
import Nav from '../component/Nav'
import {getToday} from '../util/getDay'

const TopSection = styled.div`
    width:100%;
    height: 600px;
    padding:0 2rem 6.5rem;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);
    >img {
        max-width: fit-content;
    }
`
const Home = () => {
    const today = getToday();
    return (
        <>
            <Nav headWrite='' headerColor=""/>
            <TopSection>
                <img src={MainImg} alt="메인이미지"></img>
                <MainSlide />
            </TopSection>
            <TodoWrap write="Today" date={today} />
        </>
    )
}

export default Home;