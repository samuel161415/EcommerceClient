import axios from 'axios'

//const BASE_URL ='https://sami-ecommerce.herokuapp.com/api'
const BASE_URL = "https://sami-ecommerce.herokuapp.com/api/";
//const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken;
//console.log("token",TOKEN)
//const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjMyMGM2MDRmYTU4ZmY0NDMwNzliNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTcyMjU1MCwiZXhwIjoxNjcwNTg2NTUwfQ.oyQ38MNHk_s1pdanChLsLv-fcWwt8Z4dgLMgHvIlwZg"
//console.log("storage",JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)

export const publicRequest= axios.create({
    baseURL:BASE_URL
})

//const TOKEN=
const TOKEN=()=>{
   // console.log("called")
   // console.log("USER",JSON.parse(localStorage.getItem("persist:root"))?.user)
    return localStorage.getItem("persist:root")&& JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken:null
} 
export const userRequest= axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${localStorage.getItem("persist:root")&& JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken:null}` }
})
