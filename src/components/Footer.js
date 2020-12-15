import React from 'react'
import styled from 'styled-components'

import SwitchbladeLogo from '../assets/logo.svg'

import Container from '../components/Container'

const Wrapper = styled.div`
    min-height: 330px;
    background-color: #E6EBF8;
`

const Line = styled.div`
    background-color: #7295DA;
    height: 10px;
`

export default function Footer () {
    return (
        <Wrapper>
            <Container>
                <img src={SwitchbladeLogo} height='55' width='240' />
            </Container>
            <Line/>
        </Wrapper>
    )
}