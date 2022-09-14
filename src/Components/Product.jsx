import React from 'react'
import styled from'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info=styled.div`
opacity:0;
position:absolute;
background-color:rgb(0, 0, 0,0.2);
z-index:3;
display:flex;
justify-content:center;
align-items:center;
height:100%;
width:100%;

`
const Container=styled.div`
&:hover ${Info}{
opacity:1;
}
flex:1;
margin:5px;
display:flex;
justify-content:center;
align-items:center;
min-width:280px;
height:350px;
flex-direction:column;
background-color:#f5fbfd;
position:relative;
`
const Circle=styled.div`
border-radius:50%;
height:80%;
width:80%;
position:absolute;
background-color:white;
`
const Image=styled.img`
width:100%;
height:75%;
object-fit:contain;
z-index:2;

`

const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
    background-color: #e9f5f5;
    transform:scale(1.1 );
}
`
export const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.src} />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <SearchIcon />
            </Icon>
            <Icon>
                <FavoriteBorderIcon />
            </Icon>
        </Info>
    </Container>
  )
}
