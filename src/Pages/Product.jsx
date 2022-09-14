import { Announcement } from '../Components/Announcement'
import React from 'react'
import styled from 'styled-components'
import { Footer } from '../Components/Footer'
import { Newsletter } from '../Components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Components/Navbar'
import {mobile} from '../Responsive'
const Container=styled.div`

`
const Wrapper= styled.div`
  display:flex;
  ${mobile({padding:"10px",flexDirection:"column"})}
`
const Left=styled.div`
  flex:1;

`
const Right=styled.div`
  flex:1;
`
const ImageContainer=styled.div`

`
const Image=styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  ${mobile({height:"40vh"})}
`
const InfoContainer=styled.div`
  padding:30px;
  ${mobile({padding:"10px"})}
`
const Title=styled.h1`
  font-weight:200; 
`
const Desc=styled.p`
${mobile({fontWeight:"200"})}
`
const Price=styled.span`
  font-weight:100;
  font-size:40px;
  ${mobile({fontSize:"20px"})}
`
const FilterContainer=styled.div`
  margin-top:20px;
  display:flex;
  ${mobile({width:"100%"})};
`
const Filter=styled.div`
  flex:1;
  display:flex;
  align-items:center;
 
`
const FilterTitle=styled.h2`
  font-weight:300;
  ${mobile({fontWeight:"200",fontSize:"20px"})}
`
const FilterColor=styled.div`
  border-radius:50%;
  background-color:${props=>props.color};
  height:20px;
  width:20px;
  margin:0px 5px;
  cursor:pointer;
`
const FilterSize=styled.select`
  padding:5px;
  margin-left:10px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
  display:flex;
  
`
const AmountContainer=styled.div`
  flex:1;
  display:flex;
  align-items:center;
  font-weight:700;
`
const ButtonContainer=styled.div`
  flex:1;
`
const Amount=styled.span`
  height:30px;
  width:30px;
  border-radius:10px;
  border: solid 1px teal;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0px 5px;
  
`
const Button=styled.button` 
  margin-left:10px;
  padding:15px;
  border:2px solid teal;
  background-color:white;
  font-weight:500;
  cursor:pointer;

  &:hover{
    background-color: rgb(209, 206, 206);
  }
`
export const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Left >
            <ImageContainer>
            <Image src='https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
            </ImageContainer>
          </Left>
          <Right>
            <InfoContainer>
            <Title>
               Summer cloth
            </Title>
            <Desc>
                All summer cloth products are here with different
                choise. feel free to buy and enjoy
            </Desc>
            <Price>
                $20
            </Price>
             <FilterContainer>
                <Filter>
                    <FilterTitle>
                        Color
                    </FilterTitle>
                    <FilterColor color='black' />
                    <FilterColor color='blue' />
                    <FilterColor color='gray' />
                </Filter>
                <Filter>
                    <FilterTitle>
                        Size
                    </FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>Xs</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveIcon />
                <Amount>
                  1
                </Amount>
                <AddIcon />
              </AmountContainer>
              <ButtonContainer>
                <Button> ADD TO CART</Button>
              </ButtonContainer>
             
            </AddContainer>
            </InfoContainer>
          </Right>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  ) 
}
