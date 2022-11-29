import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../Responsive'
const Container=styled.div`
display:flex;
background-color:rgb(114, 112, 112);
margin-top:30px;
color:white;
opacity:0.8;
${mobile({flexDirection:"column"})}
`
const Left=styled.div`
flex:1;
padding:20px;
`
const Logo=styled.h2`

`
const Desc=styled.div`
 margin:20px 0px; 
`
const SocialNetworkContainer=styled.div`
display:flex;
justify-content:space-between;

`
const SocialMediaIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:${props=>props.color};
display:flex;
justify-content:center;
align-items:center;

`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`
const Title=styled.h2`
margin-bottom:30px;
`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`
const Right=styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"rgb(82, 78, 78)"})}
`
const Contact=styled.p`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment=styled.img`
height:30px;
width:100%;
`
export const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>
              SAMEC.!
           </Logo>
           <Desc>
             This is just mine description to test the website.It is temporary and I will replace it soon. It is used as reminder for my for the future.
           </Desc>
           <SocialNetworkContainer>
             <SocialMediaIcon color={"#3b5998"}>
                 <FacebookIcon />
             </SocialMediaIcon>
             <SocialMediaIcon color={"#e95950"}>
                 <InstagramIcon />
              </SocialMediaIcon>
              <SocialMediaIcon color={"#0077b5"}>
                 <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon color={"#FF0000"}>
                 <YouTubeIcon  />
              </SocialMediaIcon>
             
           </SocialNetworkContainer>
        </Left>
        <Center>
             <Title>
               Links to our site
             </Title>
             <List>
              <ListItem key="1">
                Home
              </ListItem>
              <ListItem key="2">
                Cart
              </ListItem>
              <ListItem key="3">
                Man fashion
              </ListItem>
              <ListItem key="4">
                My acount
              </ListItem>
              <ListItem key="5">
                Women fashion
              </ListItem>
              <ListItem key="6">
                Terms
              </ListItem>
             </List>
        </Center>
        <Right>
           <Title>
            Contact
           </Title>
           <Contact>
             <LocationOnIcon style={{marginRight:"10px"}}/> Addis Ababa, 6 kilo
           </Contact>
           <Contact>
            <LocalPhoneIcon style={{marginRight:"10px"}}/> +251 946 142 726
           </Contact>
           <Contact>
             <EmailIcon style={{marginRight:"10px"}}/> samuelnegalign@gmail.com
           </Contact>
           <Payment src= "https://www.seekpng.com/png/full/673-6732951_credit-card-icons.png"/>
        </Right>
    </Container>
  )
}
