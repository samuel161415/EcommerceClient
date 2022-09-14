import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
const Container=styled.div`
  width:100vw;
  height:100vh;
  background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
   url("https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?w=740&t=st=1662732368~exp=1662732968~hmac=03b88cd61debb0277e7289e0fef300f6fcf17aa1008ea62b812188dcd625a8f4") center ;
  background-size:cover; 
  display:flex;
  justify-content:center;
  align-items:center;
`
const Wrapper=styled.div`
  width:30%;
  padding:20px;
  background-color:white;
  ${mobile({width:"75%"})}
`
const Title=styled.h1`
  font-size:24px;
  font-weight:300;
`
const Form=styled.form`
  display:flex;
  flex-direction:column;
  

`
const Input=styled.input`
  margin:10px 0px;
  padding:10px;
`

const Button=styled.button`
  width:40%;
  border:none;
  padding: 15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;
  margin-bottom:10px;
`
const Link=styled.a`
  margin:5px 0px;
  font-size:12px;
  text-decoration:underline;
  cursor:pointer;
`
export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          SIGN IN
        </Title>
        <Form>
          <Input placeholder="usernam" />
          <Input placeholder="password" />
          <Button>
            LOGIN
          </Button>
        </Form>
        <Link>DO NOT REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT?</Link>
      </Wrapper>
    </Container>
  )
}
