import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import {Announcement} from '../Components/Announcement'
import {Footer} from '../Components/Footer'
import Products from '../Components/Products'
import {Newsletter} from '../Components/Newsletter'
import {mobile} from '../Responsive'

const Container=styled.div`
 height:60px;
`
const FilterContainer=styled.div`
 display:flex;
 justify-content:space-between;
`
const Title=styled.h1`
`
const Filter=styled.div`
  margin:20px;
  ${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;

`
const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})}
`
const Option=styled.option`
`
export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        Dresses
      </Title>
      <FilterContainer>
        <Filter>
           <FilterText>
            Filter Products: 
           </FilterText>
           <Select>
            <Option disabled selected>Size</Option>
            <Option> XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
           </Select>
           <Select>
            <Option disabled selected>Color</Option>
            <Option> White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option> Yellow</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
           </Select>
        </Filter>
        <Filter>
        <FilterText>
            Sort Products:
           </FilterText>
           <Select>
           <Option  selected>Newest</Option>
            <Option> Price (asc)</Option>
            <Option>Price (des)</Option>
            
           </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />

    </Container>
  )
}
