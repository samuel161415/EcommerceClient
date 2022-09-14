
import React from 'react'
import styled from 'styled-components'
import {Catagories} from '../Assets/data'
import { CategoryItems } from './CategoryItems'
import {mobile} from '../Responsive'

const Container=styled.div`
  display:flex;
  padding:20px;
  justify-content:space-between;
  ${mobile({padding:"0px",flexDirection:"column"})}
`

export const Category = () => {
  return (
   <Container>
     
        {Catagories.map(item=>
            (<CategoryItems items={item} key={item.id} />)
            )}
   </Container>
  )
}
