import React from 'react'
import styled from 'styled-components'

const Snake = () => {
    return (
        <SnakeDiv>
            <div className="snake">
                <div className="head">
                    <span className="eye left"></span>
                    <span className="eye right"></span>
                    <span className="tongue"></span>
                </div>
                <div className="body b1"></div>
                <div className="body b2"></div>
                <div className="body tail"></div>
            </div>
        </SnakeDiv>
    )
}

export default Snake



const SnakeDiv = styled.div`
position: absolute;
top: 40px;


.snake {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  animation: wiggle 2.5s ease-in-out infinite;
}

/* Head */
.head {
  width: 24px;
  height: 24px;
  background: #ff7112;
  border-radius: 50%;
  position: relative;
  animation: headBob 1.8s ease-in-out infinite;
}

/* Eyes */
.eye {
  width: 4px;
  height: 4px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 7px;
}

.eye.left { left: 6px; }
.eye.right { right: 6px; }

/* Tongue flick */
.tongue {
  position: absolute;
  bottom: -6px;
  left: 50%;
  width: 2px;
  height: 6px;
  background: red;
  transform: translateX(-50%);
  animation: tongueFlick 1.5s infinite;
}

/* Body */
.body {
  width: 18px;
  height: 18px;
  background: #ff7112;
  border-radius: 50%;
}

.b1 { animation: bodyWave 2s ease-in-out infinite; }
.b2 { animation: bodyWave 2s ease-in-out infinite 0.2s; }

/* Tail */
.tail {
  width: 14px;
  height: 14px;
  opacity: 0.8;
  animation: bodyWave 2s ease-in-out infinite 0.4s;
}

/* Animations */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}

@keyframes bodyWave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes headBob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes tongueFlick {
  0%, 80%, 100% { opacity: 0; }
  85%, 95% { opacity: 1; }
}
`;
