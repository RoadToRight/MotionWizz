import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import styled from 'styled-components'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const LogoSlider = () => {

    const logos = [
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122448/logo_7_1_zoqlgd.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_3_1_jbaufr.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_6_1_wwxgax.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_5_1_j5ofrr.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_4_1_cstuqw.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_1_wlrzkz.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_2_1_zi1qwy.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_4_1_cstuqw.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_1_wlrzkz.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_2_1_zi1qwy.webp",
    ]

    return (
        <LogoSliderSec>
            <div className="container">
                <Swiper centeredSlides={true} className='swiper_parent' spaceBetween={25} slidesPerView={5} loop modules={[Pagination, Navigation, Autoplay]} navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn"
                }} pagination={{ clickable: true, el: ".custom_pagination" }} autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}>
                    {logos?.map((logo, index) => {
                        return (
                            <SwiperSlide key={logo + index}>
                                <div className="logo_card">
                                    <img src={logo} alt={`Logo ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>




        </LogoSliderSec>
    )
}

export default LogoSlider


const LogoSliderSec = styled.section`
    .logo_card{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo_card img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-width: 140px;
    }

    .swiper-wrapper{
        padding: 20px 0;
    }
    .swiper-slide{
        border:1px solid #D4D4D4;
                border-bottom: 2px solid #D4D4D4;
                padding: 20px;
             
    }
    .swiper-slide-active{
       transform: scale(1.1);
       z-index: 3;
        box-shadow: 0px 3.5px 26px rgba(0,0,0,0.04);
        border-bottom: 2px solid transparent;
    }
    .swiper-slide-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #FF7112, #000000);
}

`