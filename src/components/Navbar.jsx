import { AppBar, Box, MenuList, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const Menu = [
        { main: "Industries", submenu: [""] },
        { main: "Services", submenu: [] },
        { main: "Portfolio" },
        { main: "Our Process" },
        { main: "Resources", submenu: [] },
        { main: "About Us" },
    ]

    return (
        <Nav>
            <AppBar sx={{ background: "transparent", padding: "10px 0px" }} position='sticky'>
                <Box class="container">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0px !important" }}>
                        <Typography>
                            {/* <img width={70} src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1770498867/Logo-2-1.png_1_uaok4j.webp" alt="" /> */}
                            <Logo />


                        </Typography>

                        <Box >
                            <MenuList className='' sx={{ display: "flex", gap: "8px" }}>
                                {Menu?.map(({ main, submenu }) => {
                                    return (
                                        <>
                                            <Link><MenuList>{main}</MenuList></Link>
                                            {submenu && submenu.length > 0 ? submenu?.map((subitem) => {
                                                return (
                                                    <Link><MenuList>{subitem}</MenuList></Link>
                                                )
                                            }) : null}
                                        </>
                                    )
                                })}
                            </MenuList>
                        </Box>

                    </Toolbar>
                </Box>
            </AppBar>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    
`
