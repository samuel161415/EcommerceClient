
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container=styled.div`
  flex:1;
  margin:3px;
  position:relative;
`
const Image=styled.img`
 height:100%;
 width:100%;
 object-fit:cover;
 ${mobile({height:"25vh"})}
`
const Info=styled.div` 
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title=styled.h1`
color:white;
`
const Button=styled.button`

`
export const CategoryItems = ({items}) => {
  return (
    <Container>
        <Image src={items.src}/>
        <Info>
            <Title>
                {items.title}
            </Title>
            <Button>
                BUY NOW
            </Button>
        </Info>
    </Container>
    )
}
