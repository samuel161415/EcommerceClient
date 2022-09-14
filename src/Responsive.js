import {css} from 'styled-components';

export const mobile=(props)=>{
    console.log("props",props);
    return css `
    @media only screen and (max-width: 450px) {
        ${props}
      }
    `
   
} 