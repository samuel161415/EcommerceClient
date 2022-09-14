import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
 background-color:teal;
 height:30px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 font-weight: 500;
 font-size:16px;
`
export const Announcement = () => {
  return (
    <Container>
        Super deal. shop now . Discount is 50%;
    </Container>
  )
}
