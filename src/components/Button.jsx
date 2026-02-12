import React from 'react'
import styled from 'styled-components'

const Button = ({ text, icon }) => {
  return (
    <div>
      <Btn className='btn_1'>
        <span>{text}</span>
        <span className='icon'>{icon}</span>
      </Btn>
    </div>
  )
}

export default Button


const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  background-color: #FD5B26;
  color: white;
   

`