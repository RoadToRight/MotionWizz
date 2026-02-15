import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { FaPlay } from "react-icons/fa";
import VideoPopup from './VideoPopup';
const Portfolio = () => {

    const [ispopupOpen, setPopupOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const topMedia = [
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio8_cxizzb.png",
            video: "https://player.vimeo.com/video/1034578741?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio7_pgwaab.png",
            video: "https://player.vimeo.com/video/1034804148?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio5_sejnq0.png",
            video: "https://player.vimeo.com/video/1035387969?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio4_hdgowh.png",
            video: "https://player.vimeo.com/video/1131752914?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608227/portfolio1_f9hfyg.png",
            video: "https://player.vimeo.com/video/1122818997?autoplay=1&rel=0&controls=0#t="
        }
    ];

    const bottomMedia = [
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608228/portfolio9_czechm.png",
            video: "https://player.vimeo.com/video/1131439530?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608228/portfolio2_hj4mxu.png",
            video: "https://player.vimeo.com/video/1131439952?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608229/portfolio6_ns67ok.png",
            video: "https://player.vimeo.com/video/1131445648?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608229/portfolio3_a3wmws.png",
            video: "https://player.vimeo.com/video/1131445511?autoplay=1&rel=0&controls=0#t="
        }
    ];


    const handlePopup = (videoUrl) => {

        setPopupOpen((prev) => !prev);
        setCurrentVideo(videoUrl);
    }


    return (
        <PortfolioSec>

            {
                ispopupOpen ? <VideoPopup videoUrl={currentVideo} setPopupOpen={setPopupOpen} /> : null
            }


            <div className="portfolio_top container">
                <h4 className='highlight'>Creations</h4>
                <h2>Work That Speaks Across Industries</h2>
                <div className="text_btn">
                    <p>From tech to healthcare, finance to education, here’s a glimpse of corporate video production we’ve done for companies across a wide range of industries.</p>
                    {/* <Button text={"View All Works"} /> */}
                </div>

            </div>


            <div className="portfolio_bottom">

                <div className="portfolio_wrapper">
                    {
                        [1, 2, 3, 4].map((_, index) => {
                            return (
                                <div className="portfolio_track" key={index}>
                                    {topMedia?.map((img, index) => {
                                        return (

                                            <div className='image_div' key={index}>
                                                <img src={img.image} alt="" />
                                                <div className="play_btn" onClick={() => handlePopup(img.video)}><FaPlay /></div>
                                            </div>

                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>


                <div className="portfolio_wrapper">
                    {
                        [1, 2, 3, 4].map((_, index) => {
                            return (
                                <div className="portfolio_track" key={index}>
                                    {bottomMedia?.map((img, index) => {
                                        return (
                                            <div className='image_div' key={img + index}>
                                                <img src={img.image} alt="" />
                                                <div className="play_btn" onClick={() => handlePopup(img.video)}><FaPlay /></div>
                                            </div>
                                        )
                                    })}

                                </div>
                            )
                        })
                    }
                </div>




            </div>

            <div className="btn">
                <Button text={"View All Works"} style={{ margin: "0px auto", display: "block" }} />
            </div>

        </PortfolioSec>
    )
}

export default Portfolio

const PortfolioSec = styled.section`
/* background: url("/istockphoto-2204942462-612x612.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover; */
padding: 80px 0px;
.text_btn{
    display: flex;
    justify-content: space-between;
    p{
        width:50%;
    }

}
.image_div{
    position: relative;
    transition: all 300ms ease;
    img{
    border: 1px solid transparent;
      transition: all 300ms ease;
         border-radius: 12px;

    }
          border-radius: 12px;
}
.image_div::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
        border-radius: 12px 12px 0px 0px;
    opacity: 1;
    transition: all 300ms ease;
    width: 100%;
    height: 0;
     
           background-color: rgba(27, 44, 122, 0.6);
}
.image_div::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
        border-radius: 0px 0px 12px 12px;
    opacity: 1;
    transition: all 300ms ease;
    width: 100%;
    height: 0;
     
           background-color: rgba(27, 44, 122, 0.6);
}

.image_div:hover::before,.image_div:hover::after{
    height: 50%;
}
.image_div:hover{
    img{
        
         border-color: #1b2c7a;
    }
    .play_btn{
        opacity: 1;
    }
}
.play_btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: #ef5527;
    cursor: pointer;
    opacity: 0;
      transition: all 300ms ease;
      z-index: 3;
}
.btn{
    display: flex;
    justify-content: center;
    aicgn-items: center;
    margin-top: 20px;
}
.portfolio_top{
    margin-bottom: 20px;
    text-align: center;
    p{
        margin: 0 auto;
    }
    .highlight{
        max-width: max-content;
        margin: 0 auto;
    }
}
.portfolio_bottom {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.portfolio_track{
    display: flex;
        gap: 20px;
    animation: marquee 40s linear infinite;
    img{
        width: 550px;
           height: 100%;
        object-fit: cover;
    }
}
.portfolio_wrapper{
       display: flex;
        gap: 20px;
        overflow: hidden;
}

@keyframes marquee {
    from{
        transform: translate(0%);
    }
    to{
        transform: translate(calc(-100% - 20px));
    }
}

@media (max-width:1024px){
    .text_btn p{
        width: 100%;
    }
    .portfolio_track {
        
    }
}

`
