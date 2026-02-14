import React from 'react'
import styled from 'styled-components'

const Button = ({ text, icon, padding = "10px 20px" }) => {
  return (
    <div>
      <Btn className='btn_1' style={{ padding: padding }}>
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

  background-color: #FD5B26;
  color: white;
   

`