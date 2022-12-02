import Remove from '@mui/icons-material/Remove'
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Announcement } from '../Components/Announcement'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Add from '@mui/icons-material/Add'
import {mobile} from '../Responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'
import {  Modal } from 'antd';
import {Link} from 'react-router-dom'

const KEY="pk_test_51Ljk6xFst8SiIJX32SRgcX8Xwory5nBfIx8dTtkAYmXZIgW0P9do8zQotbLjmKd4xZ6AZYNM2xapXUvhpCmjpCln00YdK2HvYI";
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
  border-radius: 5px;
  border:${props=>props.type==="filled"?"none":"solid 1px"};
  background-color:${props=>props.type==="filled" ?"#6ECCAF":"transparent"};
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
const SummaryItemText=styled.span`

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

  //const KEY= process.env.STRIPE_KEY
  
  const cart=useSelector(state=>state.cart);
  const [stripeToken,setStripeToken]=useState(null)
  const user=useSelector(state=>state.user)
  console.log("redux user",user)
  const navigate = useNavigate()
  const onToken=(token)=>{
    setStripeToken(token);
  }
  useEffect(()=>{

  },[])

  useEffect(()=>{
    const makeRequest=async()=>{
      
      try{
         const res= await userRequest.post('/checkout/payment',{
          tokenId:stripeToken.id,
          amount:cart.total*100,
         
         });
         console.log("successData",res.data)
         success()
      }
      catch(err){
           error()
           console.log("ERROR")
      }
      
    }
    stripeToken && cart.total>=1&& makeRequest();

  },[stripeToken,cart.total,user])
  //console.log("token",stripeToken)

  //console.log("cart",cart);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>
            YOUR BAG
        </Title>
        <Top>
           <Link to="/">
           <TopBottun  type='none' >
              CONTINUE SHOPPING
           </TopBottun></Link>
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
          {cart.products?.map((product,index)=>(
                <Product key={index}>
                <ProductDetails>
                  <Image src={product.img}/>
                  <Details>
                    <ProductName><b>Product:</b>{product.title}</ProductName>
                    <ProductId><b>ID:</b> {product._id}</ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>
                        {product.quantity}
                    </ProductAmount>
                    <Remove /> 
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                </PriceDetails>
                </Product>
                ))} 
          </Info>
          <Summary>
            <SummaryTitle>
               ORDER SUMMARY
            </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>
                Subtotal 
              </SummaryItemText>
              <SummaryItemPrice>
                ${cart.total}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Estimated Shipping 
              </SummaryItemText>
              <SummaryItemPrice>
                $ 5.90
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Shipping Discount 
              </SummaryItemText>
              <SummaryItemPrice>
                $ -5.90 
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>
                Total 
              </SummaryItemText>
              <SummaryItemPrice >
                ${cart.total}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Sami Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <TopBottun type='filled'>CHECKOUT NOW</TopBottun>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
const error = () => {
  Modal.error({
    title: 'Access Denied',
    content: "IF YOU DON'T HAVE AN ACCOUNT REGISTER. ELSE LOGIN. AFTER LOGIN PLEASE REFRESH CART PAGE ONCE",
  });
};

const success = () => {
  Modal.success({
    content: 'Transaction is successful. Thank you!',
  });
};