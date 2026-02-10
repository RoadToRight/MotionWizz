import React from 'react'
import styled from 'styled-components'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


const Testimonial = () => {

    const reviewsData = [
        { name: "Ike Levick", designation: "Founder at Curio Communications", review: "This was my first time working with the team at Motion Wizz and they walked me through the process and explained how it all worked. They were patient with our feedback, polite and determined to deliver a great animation. I would recommend working with them very much!", pic: "/person1.webp" },
        { name: "Ike Levick", designation: "Founder at Curio Communications", review: "This was my first time working with the team at Motion Wizz and they walked me through the process and explained how it all worked. They were patient with our feedback, polite and determined to deliver a great animation. I would recommend working with them very much!", pic: "/person1.webp" },
        { name: "Ike Levick", designation: "Founder at Curio Communications", review: "This was my first time working with the team at Motion Wizz and they walked me through the process and explained how it all worked. They were patient with our feedback, polite and determined to deliver a great animation. I would recommend working with them very much!", pic: "/person1.webp" },
        { name: "Ike Levick", designation: "Founder at Curio Communications", review: "This was my first time working with the team at Motion Wizz and they walked me through the process and explained how it all worked. They were patient with our feedback, polite and determined to deliver a great animation. I would recommend working with them very much!", pic: "/person1.webp" },
    ]

    return (
        <TestimonialSec>
            <div className="container">

                <h3>Testimonials</h3>
                <h2>Discover What Other Brands Are Saying About us</h2>

                <Swiper className="reviews_card_wrapper" slidesPerView={3} modules={[Pagination, Navigation]} navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn"
                }} pagination={{ clickable: true, el: ".custom_pagination", renderProgressbar: () => { } }}>

                    {reviewsData?.map(({ name, designation, review, pic }) => {
                        return (
                            <SwiperSlide style={{ paddingTop: "30px" }}>
                                <div className="reviews_card">
                                    <div className="quote_icon">“</div>
                                    <div className="stars">★★★★★</div>
                                    <p className="review">
                                        {review}
                                    </p>


                                    <div className="person_info">
                                        <div className="person_image"><img src={pic} alt="" /></div>
                                        <div className="info">
                                            <div className="name">{name}</div>
                                            <div className="designation">{designation}</div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })}



                </Swiper>

                <div className="custom_pagination"></div>
                <div className="prev-btn">Prev</div>
                <div className="next-btn">Next</div>


            </div>
        </TestimonialSec>
    )
}

export default Testimonial


const TestimonialSec = styled.div`

    padding: 80px 0px;

    .reviews_card{
        background: #fff;
        border: 1px solid #eee;
        border-radius: 12px;
        padding: 20px;
        width: 300px;
        min-height: 180px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
        p{
            font-size: 14px;
        }
        .name{
            font-size: 14px;
            font-weight: 600;
        }
        .designation{
            font-size: 12px;
        }
    }
    .person_info{
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
    .quote_icon{
        background-color: #FD5B26;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center ;
        border-radius: 100px;
        font-size: 20px;
        font-weight:700;
        color: white;
        position: absolute;
        top: -16px;
    }
    .stars{
        color: #223377;
        margin-top: 10px;
    }
    .person_image{
  
        img{
          
                  width: 52px;
        height: 52px;
            border-radius: 100px;
            object-fit: contain;
        }
    }
    
`