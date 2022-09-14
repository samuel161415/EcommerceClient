import Remove from '@mui/icons-material/Remove'
import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../Components/Announcement'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Add from '@mui/icons-material/Add'
import {mobile} from '../Responsive'
const Container=styled.div``
const Wrapper=styled.div`
   padding:20px;
   ${mobile({padding:"10px"})}
`
const Title=styled.h1`
   weight:300;
   text-align:center;
`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopBottun=styled.button`
  padding:10px;
  font-weight:600;
  cursor:pointer;
  border:${props=>props.type==="filled"&&"none"};
  background-color:${props=>props.type==="filled" ?"black":"transparent"};
  color:${props=>props.type==="filled"&&"white"};
  ${mobile({padding:"5px",marginRight:"5px"})}
`
const TopTexts=styled.div`

`
const TopText=styled.span`
  text-decoration:underline;
  cursor:pointer;
  margin:0px 10px;
  ${mobile({display:"none"})}
`
const Bottom=styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({flexDirection:"column"})}
`

const Info=styled.div`
  flex:3;
  display:flex;
  flex-direction:column;
  
`

const Product=styled.div`
  display:flex;
  justify-content:space-between; 
  ${mobile({flexDirection:"column"})}
`
const ProductDetails=styled.div`
  flex:2;
  display:flex;
  ${mobile({flexDirection:"column"})}
`
const Image=styled.img`
  width:200px;
  ${mobile({width:"100%"})}
`
const Details=styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=>props.color}
`
const ProductSize=styled.span``
const PriceDetails=styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
  `

const ProductAmountContainer=styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;
  ${mobile({marginBottom:"0px"})}
`
const ProductAmount=styled.div`
  font-size:24px;
  margin:5px;
  ${mobile({margin:"5px 15px"})}
`
const ProductPrice=styled.span`
  font-size:30px;  
  font-weight:200;
  ${mobile({fontSize:"30px"})}
`
const Hr=styled.hr`
  background-color:#eee;
  border:none;
  height:1px;
  width:100%;
`
const Summary=styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  
`
const SummaryTitle=styled.h1`
  font-weight:200;

`
const SummaryItem=styled.div`
  margin:30px 0px;
  display:flex;
  justify-content:space-between;
  font-weight:${props=>props.type==='total'&&"500"};
  font-size:${props=>props.type==='total'&&"24px"};
  `
const summaryItemText=styled.span`

`
const SummaryItemPrice=styled.span``
const Button=styled.button`
  width:100%;
  padding:10px;
  background-color:black;
  color:white;
  font-weight:600;


`
export const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>
            YOUR BAG
        </Title>
        <Top>
           <TopBottun  >
              CONTINUE SHOPPING
           </TopBottun>
           <TopTexts>
            <TopText> Shopping Bag(2)</TopText>
            <TopText>Your WishingLis(0)</TopText>
           </TopTexts>
           <TopBottun type="filled">
              CHECKOUT NOW 
           </TopBottun>
        </Top>
        <Bottom>
          <Info>
            <Product>
            <ProductDetails>
              <Image src='https://media.istockphoto.com/photos/men-fashion-black-shoes-leather-isolated-on-a-white-background-picture-id1222731107?k=20&m=1222731107&s=612x612&w=0&h=HJT2qEgfTANjix-N1iKyTpf-tzP1QJ4s-aWd40NZGR0='/>
              <Details>
                <ProductName><b>Product:</b> SAMI LESSOR SHOES</ProductName>
                <ProductId><b>ID:</b> 96934854</ProductId>
                <ProductColor color="black" />
                <ProductSize><b>Size:</b> 37.8</ProductSize>

              </Details>
            </ProductDetails>
            <PriceDetails>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>
                    2
                </ProductAmount>
                <Remove /> 
              </ProductAmountContainer>
              <ProductPrice>30$</ProductPrice>
            </PriceDetails>
            </Product>
            <Hr />
            <Product>
            <ProductDetails>
              <Image src='https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
              <Details>
                <ProductName><b>Product:</b> SAMI FASHIO SHOES</ProductName>
                <ProductId><b>ID:</b> 96934854</ProductId>
                <ProductColor color="gray" />
                <ProductSize><b>Size:</b> 37.8</ProductSize>

              </Details>
            </ProductDetails>
            <PriceDetails>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>
                    2
                </ProductAmount>
                <Remove /> 
              </ProductAmountContainer>
              <ProductPrice>40$</ProductPrice>
            </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>
               ORDER SUMMARY
            </SummaryTitle>
            <SummaryItem>
              <summaryItemText>
                Subtotal 
              </summaryItemText>
              <SummaryItemPrice>
                $80
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <summaryItemText>
                Estimated Shipping 
              </summaryItemText>
              <SummaryItemPrice>
                $5.90
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <summaryItemText>
                Shipping Discount 
              </summaryItemText>
              <SummaryItemPrice>
                $ -5.90 
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <summaryItemText>
                Total 
              </summaryItemText>
              <SummaryItemPrice >
                $80
              </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
