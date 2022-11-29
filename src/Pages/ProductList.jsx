import React,{useState} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import {Announcement} from '../Components/Announcement'
import {Footer} from '../Components/Footer'
import Products from '../Components/Products'
import {Newsletter} from '../Components/Newsletter'
import {mobile} from '../Responsive'
import { useLocation } from 'react-router-dom'

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
  
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }; 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        {cat}
      </Title>
      <FilterContainer>
        <Filter>
           <FilterText>
            Filter Products: 
           </FilterText>
           <Select name="size" onChange={handleFilters}>
            <Option disabled >Size</Option>
            <Option> XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
           </Select>
           <Select name="color" onChange={handleFilters}>
            <Option disabled >Color</Option>
            <Option> white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option> yellow</Option>
            <Option>blue</Option>
            <Option>green</Option>
           </Select>
        </Filter>
        <Filter>
        <FilterText>
            Sort Products:
           </FilterText>
           <Select onChange={(e) => setSort(e.target.value)}>
           <Option  value="newest">Newest</Option>
            <Option value="asc"> Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
            
           </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />

    </Container>
  )
}
