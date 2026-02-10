import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Portfolio = () => {

    const topImages = [
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio8_cxizzb.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio7_pgwaab.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio5_sejnq0.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio4_hdgowh.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608227/portfolio1_f9hfyg.png"
    ]

    const bottomImages = [
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608228/portfolio9_czechm.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608228/portfolio2_hj4mxu.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608229/portfolio6_ns67ok.png",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608229/portfolio3_a3wmws.png"
    ]


    return (
        <PortfolioSec>

                <div className="portfolio_top container">
                    <h4>Creations</h4>
                    <h2>Work That Speaks Across Industries</h2>
                    <div className="text_btn">
                        <p>From tech to healthcare, finance to education, here’s a glimpse of corporate video production we’ve done for companies across a wide range of industries.</p>
                        <Button text={"View All Works"} />
                    </div>

                </div>


                <div className="portfolio_bottom">

                    <div className="portfolio_wrapper">
                        {
                            [1, 2, 3, 4].map(() => {
                                return (
                                    <div className="portfolio_track">
                                        {topImages?.map((img) => {
                                            return (

                                                <img src={img} alt="" />

                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="portfolio_wrapper">
                        {
                            [1, 2, 3, 4].map(() => {
                                return (
                                    <div className="portfolio_track">
                                        {bottomImages?.map((img) => {
                                            return (
                                                <img src={img} alt="" />
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>




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

.text_btn{
    display: flex;
    justify-content: space-between;
    p{
        width:50%;
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
        height: 400px;
        object-fit: cover;
    }
}
.portfolio_wrapper{
       display: flex;
        gap: 20px;
}

@keyframes marquee {
    from{
        transform: translate(0%);
    }
    to{
        transform: translate(calc(-100% - 20px));
    }
}

`
