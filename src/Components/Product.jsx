import React from 'react'
import styled from'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux'
import { useState } from 'react';
import { useEffect } from 'react';
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

const Icon=styled.button`
width:40px;
height:40px;
border-radius:50%;
border:none;
background-color:${props=>{
    
    return props?.type ?"#6ECCAF":"none"
}};
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
export const Product = ({item,keys}) => {
    
    const [color,setColor]=useState('');
    const [touched,setTouched]=useState(false);
    const [favTouched,setFavTouched]=useState(false);
    const [quantity ,setQuantity]=useState(1);
    const [size ,setSize]=useState('');
    const dispatch=useDispatch();
    const [product,setProduct]=useState(item);
     
    useEffect(()=>{
    
    },[])
    const handleClick=()=>{
        console.log("item",item)
     setColor(item.color[0]);
     setQuantity(1);
     setSize(item.size[0]);
     console.log("touchedabove",touched)
     //setProduct(item);
     setTouched(!touched);
     console.log("touchedbelow",!touched)
     !touched&&dispatch(addProduct({...product,quantity,color,size}));
    }
    const handleFavorite=()=>{
        setFavTouched(!favTouched)
    }

  return (
    <Container key={keys}>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon onClick={handleClick} type={touched} >
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchIcon />
                </Link>
                
            </Icon >
            <Icon onClick={handleFavorite} type={favTouched} >
                <FavoriteBorderIcon />
            </Icon>
        </Info>
    </Container>
  )
}
