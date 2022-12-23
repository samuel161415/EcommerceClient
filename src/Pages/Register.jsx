import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
import {  Modal } from 'antd';
import { userRequest } from '../requestMethods';
import { Navigate } from 'react-router-dom';
const Container=styled.div`
  width:100vw;
  height:100vh;
  // background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
  //  url("https://plus.unsplash.com/premium_photo-1661274042309-2a6e8b1d2e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80") center ;
  // background-size:cover;
  // background-repeat:no-repeat;
  background-color:#6ECCAF;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Wrapper=styled.div`
  width:40%;
  padding:20px;
  background-color:white;
  ${mobile({width:"75%"})}
`
const Title=styled.h1`
  font-size:24px;
  font-weight:300;
`
const Form=styled.form`
  dispaly:flex;
  flex-wrap:wrap;

`
const Input=styled.input`
  flex:1;
  min-width:40%;
  margin:20px 10px 0px 0px;
  padding:10px;
`
const Agreement=styled.p`
  font-size:20px;
  margin: 20px 0px;
`
const Button=styled.button`
  width:40%;
  border:none;
  padding: 15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;
`
const Error=styled.p`
 color:red;
 font-style:italic;
`
export const Register = () => {
   const [userData,setUserData]=useState({firstName:'',lastName:'',username:'',email:'',password:'',confirmPassword:''});
   const [errorr,setError]=useState(false)
   const [user,setUser]=useState(false)
   const hadleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
   }

   const handleClick=async (e)=>{
    e.preventDefault()
    if(!userData.firstName||!userData.lastName||!userData.username||!userData.email||!userData.password||!userData.confirmPassword) error('please fill all inputs properly')
    else if(userData.password!==userData.confirmPassword) error('password not match')
    else {
      
      const res= await userRequest.post('/auth/register',userData);
      if(res.status===201) 
      {
        console.log('ok')
      setError(false)
      setUser(true);
     
    }
      else setError(true)
      
    }

   }
  return (
    <Container>
      <Wrapper>
        <Title>
          CREATE AN ACCOUNT
        </Title>
        <Form>
          <Input name="firstName" placeholder="firstName" onChange={hadleChange}/>
          <Input name="lastName" placeholder="lastName" onChange={hadleChange}/>
          <Input name="username" placeholder="username" onChange={hadleChange}/>
          <Input name="email" placeholder="email" onChange={hadleChange}/>
          <Input name="password" placeholder="password" onChange={hadleChange} minLength={5}/>
          <Input name="confirmPassword" placeholder="confirmPassword" onChange={hadleChange} minLength={5}/>
          
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>
            CREATE
          </Button>
          {errorr&&<Error>either email or username is already in use</Error>}
          {user&&<Navigate to='/login' />}
        </Form>
      </Wrapper>
    </Container>
  )
}
const error = (val) => {
  Modal.error({
    title: 'Invalid Input',
    content: val,
  });
};