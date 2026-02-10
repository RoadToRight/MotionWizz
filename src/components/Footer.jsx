import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {

    const menus = [
        { head: "Company", links: [{ label: "About", url: "" }, { label: "Process", url: "" }, { label: "Portfolio", url: "" }, { label: "Talk To Us", url: "" }] },

        { head: "Industries", links: [{ label: "Educational", url: "" }, { label: "Whiteboard", url: "" }, { label: "SAAS", url: "" }, { label: "Infographics", url: "" }, { label: "Explainer", url: "" }, { label: "Ai Products", url: "" },] },

        { head: "Resources", links: [{ label: "Blogs", url: "" }, { label: "Process", url: "" }, { label: "Portfolio", url: "" }, { label: "Talk To Us", url: "" }, { label: "How we work", url: "" }] },

        { head: "Join Us", links: [{ label: "Facebook", url: "" }, { label: "LinkedIn", url: "" }, { label: "YouTube", url: "" }, { label: " Instagram", url: "" }] }
    ]

    return (
        <FooterSec>
            <div className="container">
                <div className="footer_top">
                    <div className="sec">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1770498867/Logo-2-1.png_1_uaok4j.webp" alt="" />
                        </div>
                    </div>
                    {menus?.map((item) => {
                        return (
                            <div className="sec">
                                <ul>
                                    <h5>{item.head}</h5>
                                    {item?.links?.map(({ label, url }) => {
                                        return <Link to={url}><li>{label}</li></Link>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </FooterSec>
    )
}

export default Footer

const FooterSec = styled.footer`
background: url("https://res.cloudinary.com/dp6b6emb9/image/upload/v1770500261/Footer_eyglgx.webp");
background-repeat: no-repeat;
background-position: bottom;
background-size: cover;
padding: 80px 0px;

.logo img{
    width: 70px;
    height: 70px;
    
}
    
`

