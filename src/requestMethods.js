import axios from 'axios'

//const BASE_URL ='https://sami-ecommerce.herokuapp.com/api'
const BASE_URL = "https://gebeya.onrender.com/api";

export const publicRequest= axios.create({
    baseURL:BASE_URL
})

//const TOKEN=
// const TOKEN=()=>{
//    // console.log("called")
//    // console.log("USER",JSON.parse(localStorage.getItem("persist:root"))?.user)
//     return localStorage.getItem("persist:root")&& JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken:null
// } 
export const userRequest= axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${localStorage.getItem("persist:root")&& JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken:null}` }
})
