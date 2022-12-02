import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile} from '../Responsive'

const Container=styled.div`
background-color:rgb(246, 206, 206);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Title=styled.h1`
font-size:70px;
margin-bottom:20px;
${mobile({fontSize:"50px"})}
`
const Desc=styled.p`
font-weight:300;
font-size:24px;
margin-bottom:20px;
${mobile({textAlign:"center"})}
`
const SearchContainer=styled.div`
display:flex;
justify-content:space-between;
width:50%;
border:1px solid lightgray;
margin-bottom:20px;
${mobile({width :"80%"})}
`
const Input=styled.input`
flex:8;
border:none;

`
const Button=styled.button`
width:40px;
flex:1;
background-color:#6ECCAF;
color:white;
border:1px solid;
`
export const Newsletter = () => {
  return (
    <Container>
        <Title>
          Newsletter
        </Title>
        <Desc>
          Get timely updates from your favorite products
        </Desc>
        <SearchContainer>
            <Input placeholder='Your email' />
          <Button>
            <SendIcon />
          </Button>
        </SearchContainer>
      
    </Container>
  )
}
