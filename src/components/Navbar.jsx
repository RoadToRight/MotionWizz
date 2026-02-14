import { AppBar, Box, Drawer, IconButton, MenuList, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
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

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Nav>
            <AppBar sx={{ background: "transparent", padding: "10px 0px", boxShadow: "none" }} position='sticky'>
                <Box className="container">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0px !important" }}>
                        <Typography>
                            {/* <img width={70} src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1770498867/Logo-2-1.png_1_uaok4j.webp" alt="" /> */}
                            <Logo />


                        </Typography>

                        {
                            isMobile ? (
                                <>
                                    <IconButton>
                                        <MdMenu />
                                    </IconButton>
                                    <Drawer
                                        anchor="right"
                                        open={drawerOpen}
                                        onClose={() => setDrawerOpen(false)}

                                    >
                                        {Menu?.map(({ main, submenu }) => {
                                            return (
                                                <div key={main}>
                                                    <Link><MenuList>{main}</MenuList></Link>
                                                    {submenu && submenu.length > 0 ? submenu?.map((subitem) => {
                                                        return (
                                                            <Link key={subitem}><MenuList>{subitem}</MenuList></Link>
                                                        )
                                                    }) : null}
                                                </div>
                                            )
                                        })}
                                    </Drawer>

                                </>
                            ) : (
                                <Box>

                                    <MenuList className='nav_ul' sx={{ display: "flex", gap: "12px" }}>
                                        {Menu?.map(({ main, submenu }) => {
                                            return (
                                                <div key={main}>
                                                    <Link><MenuList>{main}</MenuList></Link>
                                                    {submenu && submenu.length > 0 ? submenu?.map((subitem) => {
                                                        return (
                                                            <Link key={subitem}><MenuList>{subitem}</MenuList></Link>
                                                        )
                                                    }) : null}
                                                </div>
                                            )
                                        })}

                                        <Button text={"Get a Quote"} />
                                    </MenuList>




                                </Box>
                            )
                        }



                    </Toolbar>
                </Box>
            </AppBar >
        </Nav >
    )
}

export default Navbar

const Nav = styled.nav`
    .nav_ul a{
        color: #1b2c7a;
        text-decoration: none;
        font-weight: 700;
    }
`
