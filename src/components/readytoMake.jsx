import React, { useRef } from 'react'
import styled from 'styled-components'
import Button from './Button'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const readytoMake = () => {

    const ReadyDiv = useRef()

    useGSAP(() => {
        const el = ReadyDiv.current;

        gsap.fromTo(
            el,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: 'play none none reverse',
                    markers: true
                }
            }
        )

    })

    return (
        <Ready ref={ReadyDiv}>
            <div className="left_section">
                <h3>Ready to make a video? 🎉</h3>
                <p>New to MotionWizz? You can try us out before formal engagement. Really!</p>
            </div>
            <div className="right_section">
                <Button text={"Let's Talk"} />
            </div>
        </Ready>
    )
}

export default readytoMake


const Ready = styled.div`
    background-color: #FAFAFA;
    box-shadow: 0px 20px 24px #10182822;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    border-radius: 16px;
    margin: 0 auto;
    position: relative;
    top:-125px;

    .left_section {

        h3{
            color: black;
            margin-bottom: 12px;
        }
        p{
            color: #737373;
        }
    }
`