import React,{useState}from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../Assets/data';
import {mobile} from '../Responsive'
const Container=styled.div`
   height:100vh;
   widht:100%;
   display:flex;
   position:relative;
   overflow:hidden;
   ${mobile({display:"none"})}
`
const Wrapper=styled.div`

height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex*-100}vw)
`
const Slide=styled.div`
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
background-color:${props=>props.bg};
`
const ImageContainer=styled.div`

height:100%;
flex:1;
display:flex;
align-items:center;
justify-content:center;


`
const InfoContainer=styled.div`
flex:1;
padding:30px;
`
const Image=styled.img`
  height:80%;
  object-fit:cover;
  border-radius:50%;
`
const Title=styled.h1`
font-size:70px;

`
const Desc=styled.p`
  margin:50px 0px;
  font-size:20p x;
  font-weight:500

`
const Button=styled.button`
 padding:10px;
 font-size:20px;
 cursor:pointer;
 border-radius:10%;
 border:none;
`

const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%; 
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=>props.direction==='left'&&"10px"};
    right:${props=>props.direction==="right"&&"10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`
export const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const clickHandler=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1: 0 )
        }
      
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>clickHandler("left")} key="1">
          <ArrowLeftOutlinedIcon/>
        </Arrow >
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>
              <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                  <Image src={item.src}/>
              </ImageContainer>
              <InfoContainer>
                  <Title>
                      {item.title}
                  </Title>
                  <Desc>
                      {item.desc}
                  </Desc>
                  <Button>
                      BUY NOW!
                  </Button>
              </InfoContainer>
          </Slide>
            )}
           
            
        </Wrapper>
        <Arrow direction="right" onClick={e=>clickHandler("right")} key="2">
        <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}
