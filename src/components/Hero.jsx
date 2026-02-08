import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const Hero = () => {
    return (
        <HeroSec className='container'>
            <div className="left_side">
                <h1>Explainer videos that turn complex ideas into clear decisions. </h1>
                <h4 className="subheading">Explainer videos that turn “huh?” into “aha!”</h4>
                <p>Trusted by SaaS and tech teams to explain products, win buy-in and accelerate growth.</p>
                <Button />
            </div>

            <div className="right_side">
                <video autoPlay loop muted src="https://motionwizz.com/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-16-at-9.09.27-PM.mp4"></video>
            </div>

        </HeroSec>
    )
}

export default Hero

const HeroSec = styled.section`
    
    display: flex;
    padding: 80px 0px;
    .left_side{
        width:50%;
    }
    .right_side{
        width: 50%;
    }
    .right_side video{
        width: 100%;

    }

`
