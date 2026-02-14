import { Canvas } from '@react-three/fiber'
import React from 'react'
import Sphere from './Sphere'
import styled from 'styled-components'
import Button from './Button'

const ThreeHero = () => {
    return (
        <MainHeroContainer>
            <div className="text_container">
                <span className="highlight">Motion Wizz</span>
                <h1>Grow your users. Smarter.</h1>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <div className="input">
                    <input type="text" placeholder='Enter email' />
                    <Button text={"Join Us"} />
                </div>
                <span>We care about your data in our privacy policy.</span>

            </div>
            <CanvasContianer>
                <Canvas style={{ width: '100%', height: '100%' }}>
                    <Sphere />
                </Canvas>
            </CanvasContianer>
        </MainHeroContainer>
    )
}

export default ThreeHero

const MainHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(85vh - 90px);
  cursor: pointer;
  
.text_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
      height: 50%;
          gap: 15px;
          position: relative;
          top: 80px;
}
.input{
        display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    input{
    padding: 10px 16px;
        border-radius: 12px;
    }
}
.highlight{
    
}
 h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
font-size: 55px;
max-width: 700px;
}
p{
    max-width: 600px;
}

`
const CanvasContianer = styled.div`


  width: 100%;
  height: 50%;

`