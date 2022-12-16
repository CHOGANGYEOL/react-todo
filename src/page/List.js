import styled from 'styled-components'
import Nav from '../component/Nav'
import TodoWrap from '../component/TodoWrap'
import { getToday, getTomorrow } from '../util/getDay'


const ListMainWrap = styled.div`
padding: 11rem 0 0;
background-color:var(--background-color);
`

const List = () => {
    const [today, tomorrow] = [getToday(), getTomorrow()]
    return (
        <>
            <Nav headWrite='List' headerColor="true" />
            <ListMainWrap>
                <TodoWrap write="Today" date={today} />
                <TodoWrap write="Tomorrow" date={tomorrow}/>
                <TodoWrap write="Another" date="all"/>
            </ListMainWrap>
        </>
    )
}

export default List