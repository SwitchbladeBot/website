import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import SwitchbladeLogo from '../assets/logo.svg'
import Container from './Container'

const Logo = styled.img`
`

const Wrapper = styled.div`
    height: 55px;
    background-color: #E6EBF8;
`

export default function Navbar () {
    const loginUrl = 'https://switchbladeid.herokuapp.com/authorize?client_id=CcBS96VfStZby1x4&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Falexa%2Fcallback&scope=identify&response_type=code'

    return (
        <Wrapper>
            <Container>
                <Link to='/'>
                    <Logo src={SwitchbladeLogo} />
                </Link> <Link to='/commands'>Commands</Link> <Link to='/opensource'>Features</Link> <Link to='/help'>Help</Link> <Link to={loginUrl}>Login</Link>
            </Container>
        </Wrapper>
    )
}