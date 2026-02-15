import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoDiv>
            <div className="logo">
                <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className="zigzag">
                    <polyline points="10,20 25,12 40,30 50,5 76,30 86,5 105,20 115,8" fill="none" stroke="#ff6a1a"
                        strokeWidth="12" strokeLinejoin="round" />
                </svg>
                <strong>
                    <span>Motion</span>
                    <span>Wizz</span>
                </strong>
            </div>

        </LogoDiv>
    )
}

export default Logo


const LogoDiv = styled.div`
      .logo {
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            strong{
                color: #000000;
            }
        }

        svg {
            width: 100%;
            height: 20px;
            transform: rotate(14deg);
            position: relative;
            left: 15px;
        }

        .zigzag {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: draw 5s ease-in-out infinite;
        }

        @keyframes draw {
            0% {
                stroke-dashoffset: 400;
            }

            50% {
                stroke-dashoffset: 0;
            }

            100% {
                stroke-dashoffset: -400;
            }
        }

        @media (max-width:767px){
            .logo{
                align-items: start;
                width: max-content;
                strong{
                color: #1b2c7a;
            }
            }
        }
`