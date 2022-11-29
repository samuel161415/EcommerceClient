import { Announcement } from '../Components/Announcement'
import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Footer } from '../Components/Footer'
import { Newsletter } from '../Components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../Components/Navbar'
import {mobile} from '../Responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

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
  margin:0px 3px;
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

  const [product,setProduct]=useState({});
  const location=useLocation();
  const id=location.pathname.split('/')[2]
  const [quantity ,setQuantity]=useState(1);
  const [color ,setColor]=useState('');
  const [size ,setSize]=useState('');
  const dispatch=useDispatch()
  useEffect(()=>{
    const getProduct=async()=>{
      try{
        const res=await publicRequest.get('/products/find/'+id);
        setProduct(res.data);
      }
      catch(err){
      }
   
    }
    getProduct();
  },[id]);
 
  console.log("size",size);
   const handleClick=()=>{ 
    // update our card
    
    dispatch(addProduct({...product,quantity,color,size}));
       
   }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Left >
            <ImageContainer>
            <Image src={product.img} />
            </ImageContainer>
          </Left>
          <Right>
            <InfoContainer>
            <Title>
               {product.title}
            </Title>
            <Desc>
                {product.desc}
            </Desc>
            <Price>
                ${product.price}
            </Price>
             <FilterContainer>
                <Filter>
                    <FilterTitle>
                       Color
                    </FilterTitle>
                    {
                      product.color?.map((item)=>(
                        <FilterColor color={item} key={item} onClick={()=>setColor(item)}/>
                      ))
                    }
                </Filter>
                <Filter>
                    <FilterTitle>
                        Size
                    </FilterTitle>
                    <FilterSize onChange={(e)=>(setSize(e.target.value))}>
                        {product.size?.map((item)=>(
                          <FilterSizeOption key={item}>{item}</FilterSizeOption>
                        ))}
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveIcon onClick={()=>{
                  quantity>1&&setQuantity(quantity-1);
                }}/>
                <Amount>
                  {quantity}
                </Amount>
                <AddIcon onClick={()=>{
                  setQuantity(quantity+1);
                }} />
              </AmountContainer>
              <ButtonContainer>
                <Button onClick={handleClick}> ADD TO CART</Button>
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
