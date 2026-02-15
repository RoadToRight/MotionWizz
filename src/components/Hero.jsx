import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
    return (
        <HeroSec>
            <div className="container">
                <div className="left_side">
                    <h1>Explainer videos that turn complex ideas into clear decisions. </h1>
                    <h4 className="subheading">Explainer videos that turn “huh?” into “aha!”</h4>
                    <p>Trusted by SaaS and tech teams to explain products, win buy-in and accelerate growth.</p>
                    <Button text={"Book a free Story Planning "} icon={<IoIosArrowRoundForward size={22} />} />
                </div>

                <div className="right_side">
                    <video autoPlay loop muted src="https://motionwizz.com/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-16-at-9.09.27-PM.mp4"></video>
                </div>
            </div>
        </HeroSec>
    )
}

export default Hero

const HeroSec = styled.section`
    
  
background:
  linear-gradient(60deg, #ff5e00 0%, #ff5e00 20%, transparent 20%),
  linear-gradient(-60deg, #ff5e00 0%, #ff5e00 20%, #ffffff 20%);
  .container{
  display: flex;
    padding: 80px 0px;
        flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
/* background:
  linear-gradient(
    70deg,
    #ff5e00 0%,
    #ff5e00 15%,
    rgba(255, 94, 0, 0.6) 20%,
    rgba(255, 94, 0, 0.2) 25%,
    transparent 30%
  ),
  linear-gradient(
    -70deg,
    #ff5e00 0%,
    #ff5e00 15%,
    rgba(255, 94, 0, 0.6) 20%,
    rgba(255, 94, 0, 0.2) 25%,
    #ffffff 30%
  ); */


    .left_side{
        width:60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
    }
    .right_side{
        width: 70%;
           

    }
    .right_side video{
        width: 100%;
         border: 1px solid #1b2c7a;
        border-radius: 12px;
    }

    @media (max-width:767px){
        .left_side{
            width: 100%;
        }
    }

`
