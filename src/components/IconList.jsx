import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const IconList = ({ icon, text,url }) => {
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
    
`