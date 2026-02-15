import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextWrapAnimation = () => {

    const text2Ref = useRef(null);

    useGSAP(() => {
        const el = text2Ref.current;
        gsap.to(el, {
            width: '100%',
            duration: 20,
            scrollTrigger: {
                trigger: ".image_faqs_wrapper",
                start: "70% 0%",
                end: "0% 0%",
                scrub: 5,
            }
        })
    })

    return (
        <TextWrap className='text_wrap'>
            <div className="container">
                <h2 className="text-1">Let's Connect</h2>
                <h2 ref={text2Ref} className="text-2">Let's Connect</h2>
            </div>
        </TextWrap>
    )
}

export default TextWrapAnimation


const TextWrap = styled.div`
padding: 0px 0px 20px 0px;
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0px !important;
    width: max-content;
}
h2{
        font-size: 80px;
        white-space: nowrap;
overflow: hidden;
/* left: 50%; */
width: max-content;

}
    h2.text-1 {
        opacity: 0.5;
    }
    h2.text-2 {
        position: absolute;
        left: 0px;
        width: 0%;
        color: #ef5527;
        
    }
      @media (max-width:1024px){
      h2 {
         font-size: 50px;
    }
 
   }

   @media (max-width:767px){
      h2 {
         font-size: 38px;
    }
 
   }
`