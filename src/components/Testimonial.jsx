import React from 'react'
import styled from 'styled-components'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const Testimonial = () => {

    const reviewsData = [
        {
            name: "Kinsey Crim",
            designation: "Events and Marketing Manager at HSWERX",
            review:
                "Working with Motion Wizz was AMAZING. They took the time to understand exactly what I wanted the video to look like and were incredibly patient with all my revisions. Not only did their professionalism and visual appeal EXCEED my expectations, but their quick responsiveness and high level of cooperation made the entire process smooth and enjoyable. This was a GREAT experience",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117559/kinsey-crim_1_jfogje.webp",
        },
        {
            name: "Noah Tanghe",
            designation: "Student International Management at Hogeschool Gent",
            review:
                "Working with Motion Wizz team was a very smooth experience. One of their greatest strengths is their flexibility and responsiveness. Whenever they were asked to step in, they did so perfectly and usually delivered excellent results. They bring their own experience and perspective to the table, which truly elevates the final result. Overall, I’m very satisfied with both the collaboration and the outcome.",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/Noah-Tanghe_1_qhrcwo.webp",
        },
        {
            name: "Ike Levick",
            designation: "Founder at Curio Communications",
            review:
                "This was my first time working with the team at Motion Wizz and they walked me through the process and explained how it all worked. They were patient with our feedback, polite and determined to deliver a great animation. I would recommend working with them very much!",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/person1_1_j47o88.webp",
        },
        {
            name: "James Pearson",
            designation: "Senior Manager at JGP Consultancy",
            review:
                "They have been exceptional and we will certainly work together in future. We’re delighted with the final video and it does exactly what we asked. We worked with Motion Wizz Team throughout and their communication was excellent. We would thoroughly recommend them and their services.",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/james-pearson_1_hrjaiy.webp",
        },
        {
            name: "Ines Durruti",
            designation: "Global Head of Product Design at Mapal Group",
            review:
                "Working with Motion Wizz Team has been an excellent experience. They were super quick to respond and deliver the animated videos, always maintaining very good quality and attention to detail. They were also extremely flexible with revisions and patient throughout the whole process, which made the collaboration smooth and professional. Highly recommended!",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117559/ines-durruti_1_r737ve.webp",
        },
        {
            name: "Devam Sukhija",
            designation: "Managing Director at We Buy Life Policy",
            review:
                "Really great communication and super quick with some updates that were required to our animations that had previously been done. Couldn’t recommend more, thank you for all your hard work and help!",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/Devam-Sukhija_1_miza5i.webp",
        },
    ];


    return (
        <TestimonialSec>
            <div className="container">

                <h3>Testimonials</h3>
                <h2>Discover What Other Brands Are Saying About us</h2>

                <Swiper className="reviews_card_wrapper" loop={true} spaceBetween={20} slidesPerView={3} modules={[Pagination, Navigation, Autoplay]} navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn"
                }} pagination={{ clickable: true, el: ".custom_pagination" }} autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                >

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

                <div className="swiper_controls">
                    <div className="navigation prev-btn"><FaLongArrowAltLeft /></div>

                    <div className="custom_pagination"></div>
                    <div className="navigation next-btn"><FaLongArrowAltRight /></div>
                </div>


            </div>
        </TestimonialSec>
    )
}

export default Testimonial


const TestimonialSec = styled.div`

    padding: 0px 0px;
    .swiper_controls{
        display: flex;  
        justify-content: center;
        align-items: center;
        width: max-content;
        background-color: #E4E4EE;
            padding: 6px;
            gap: 10px;
            border-radius: 100px;
            margin: 0 auto;
            margin-top: 10px;
    }
    .navigation{
         display: flex;  
        justify-content: center;
        align-items: center;
        padding: 8px;
        border-radius: 100px;
        color: white;
        cursor: pointer;
        transition: all 300ms ease;
    }
    .navigation:hover{
        background-color: #223377;
    }
       .prev-btn{
            background-color: #C8C8C8;
                /* color: #223377; */

        }
        .next-btn{
            background-color: #fd5b26;
        }
    .custom_pagination{
        .swiper-pagination-bullet:hover{
              background-color: #223377;
        }
        .swiper-pagination-bullet{
            background-color: #ADADAD;
            opacity: 1;
            margin: 0px 2px;
               transition: all 300ms ease;
        }
          .swiper-pagination-bullet-active{
            background-color: #FD5B26;
        }
    }
    .reviews_card{
        background: #fff;
        border: 1px solid #fd5b26;
        border-radius: 12px;
        padding: 20px;
        /* width: 300px; */
        /* min-height: 180px; */
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