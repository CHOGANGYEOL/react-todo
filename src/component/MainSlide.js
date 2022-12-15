import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components'
import { Autoplay, Pagination } from 'swiper';

const LetterWrap = styled.div`
    >h2 {
        margin: 5rem 0 1rem 0;
        font-size:2.8rem;
        font-weight: 800;
    }
`

const MainSlide = () => {

    const copiedArr = [
        {
            id: 0,
            content: "미래의 가장 좋은 점은 한 번에 하루 씩 온다는 것 이다."
        },
        {
            id: 1,
            content: "웃음 없는 하루는 낭비한 하루다."
        },
        {
            id: 2,
            content: "우리를 조금 크게 만드는데 걸리는 시간은 단 하루면 충분하다."
        },
    ]
    return (
        <LetterWrap>
            <h2>Get thing done.</h2>
            <Swiper className='swiper-wrap'
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                {copiedArr.map((item) => (
                    <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
                ))}
            </Swiper>
        </LetterWrap>
    )
}
export default MainSlide