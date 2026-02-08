import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoDiv>
            <div class="logo">
                <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
                    <polyline class="zigzag" points="0,20 25,5 50,30 75,5 100,30 125,5 150,30 175,5 200,20" />
                </svg>

            </div>
            <strong>
                <span>Motion</span>
                <span>Wizz</span>
            </strong>
        </LogoDiv>
    )
}

export default Logo


const LogoDiv = styled.div`
      .logo {
            width: 70px;
            height: 30px;
            /* padding: 10px; */
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            width: 100%;
            height: 100%;
            transform: rotate(12deg);
            /* 👈 TILT */
        }

        .zigzag {
            fill: none;
            stroke: #ff6a1a;
            stroke-width: 8;
            stroke-linecap: round;
            stroke-linejoin: round;

            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            animation: drawZigzag 2s ease-in-out infinite;
        }

        @keyframes drawZigzag {
            0% {
                stroke-dashoffset: 300;
            }

            50% {
                stroke-dashoffset: 0;
            }

            100% {
                stroke-dashoffset: -300;
            }
        }
`