import React from 'react'
import styled from 'styled-components'

const Button = ({ text, icon }) => {
  return (
    <BtnContainer>
      <Btn className='btn_1'>
        <span>{text}</span>
      </Btn>
      <span className='icon'>{icon}</span>
    </BtnContainer>
  )
}

export default Button

const BtnContainer = styled.div`
  display: flex;
    justify-content: center;
  align-items: center;

  .icon{
clip-path: polygon(
  5% 0%,
  100% 0%,
  95% 100%,
  0% 100%
);
background-color: red;
}

`

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
clip-path: polygon(
  5% 0%,
  100% 0%,
  95% 100%,
  0% 100%
);

  padding: 0px 20px;
  background-color: #FD5B26;
  color: white;


`