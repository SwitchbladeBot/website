import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
     width: 100%;
     background-color: #0B0F1B;
     height: 400px;
     color: #FFFFFF;
     text-align: center;
     font-family: 'Inter'
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 40px;
`

const Subtitle = styled.h1`
    font-size: 30px;
    padding-top: 15px;
`

export default function Alexa () {
    return (
        <Wrapper>
            <Title>Alexa, ask Switchblade to play Caramelldansen</Title>
            <Subtitle>The ultimate music bot, now with voice assistant support.</Subtitle>
            <button>Learn more</button>
        </Wrapper>
    )
}