import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  margin: auto;
  width: 1300px;
`

export default function Container ({ children }) {
    return (
        <Wrapper>
          {children}
        </Wrapper>
    )
}