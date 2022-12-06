import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
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
export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          CREATE AN ACCOUNT
        </Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>
            CREATE
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
