import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Button from './Button'
import { MdMenu } from "react-icons/md";

const Navbar = () => {

    const Menu = [
        { main: "Industries", submenu: [""] },
        { main: "Services", submenu: [] },
        { main: "Portfolio" },
        { main: "Our Process" },
        { main: "Resources", submenu: [] },
        { main: "About Us" },
    ]

    const isMobile = false;
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Nav>
            <div className="nav_container">

                <div className="logo_section">
                    <Logo />
                </div>

                <div className="menu_section">
                    {
                        isMobile ? (
                            <>
                                <IconButton onClick={() => setDrawerOpen(true)}>
                                    <MdMenu color='white' />
                                </IconButton>
                                <div
                                    anchor="left"
                                    open={drawerOpen}
                                    onClose={() => setDrawerOpen(false)}
                                    className='Drawer'
                                >
                                    {Menu?.map(({ main, submenu }) => {
                                        return (
                                            <div key={main}>
                                                <Link><ul>{main}</ul></Link>
                                                {submenu && submenu.length > 0 ? submenu?.map((subitem) => {
                                                    return (
                                                        <Link key={subitem}><li>{subitem}</li></Link>
                                                    )
                                                }) : null}
                                            </div>
                                        )
                                    })}
                                </div>

                            </>
                        ) : (
                            <div>

                                <ul className='nav_ul' style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
                                    {Menu?.map(({ main, submenu }) => {
                                        return (
                                            <div key={main}>
                                                <Link><ul>{main}</ul></Link>
                                                {submenu && submenu.length > 0 ? submenu?.map((subitem) => {
                                                    return (
                                                        <Link key={subitem}><li style={{ padding: "0px" }}>{subitem}</li></Link>
                                                    )
                                                }) : null}
                                            </div>
                                        )
                                    })}

                                </ul>




                            </div>
                        )
                    }
                </div>
                <Button text={"Get a Quote"} />

            </div>


        </Nav >
    )
}

export default Navbar

const Nav = styled.nav`
    position: sticky;
    top: 10px;
    z-index: 99;

.nav_container{
max-width: 900px;
    margin: 0 auto;
    width: 100%;

backdrop-filter: blur(30px);
    display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #D4D4D4;
margin-top: 10px;
border-radius: 100px;
padding: 5px 30px ;
box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.2);
}
li{
    list-style: none;
}
.Drawer{
    display: flex;
    gap: 20px;
}
    .nav_ul a{
        color: #000;
        text-decoration: none;
        font-weight: 700;
    }
    .nav_ul {
                margin-top: 18px;

    }
    .Drawer .MuiDrawer-paper{
        width:100%
    }
`
