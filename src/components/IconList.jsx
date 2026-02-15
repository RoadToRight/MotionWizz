import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const IconList = ({ icon, text, url }) => {
    return (
        <IconListDiv>
            <div className="icon">{icon}</div>
            <Link to={url}>
                <div className="text">{text}</div>
            </Link>
        </IconListDiv>
    )
}

export default IconList

const IconListDiv = styled.div`
    display: flex;
    gap: 10px;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
    padding: 20px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 2px solid #e8e8f0;
    a{
        color: black;
        text-decoration: none;
    }
`