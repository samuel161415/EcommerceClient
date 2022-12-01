import axios from 'axios'

const BASE_URL ='https://sami-ecommerce.herokuapp.com/api'
console.log("token",JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)
//const token=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//console.log("token",TOKEN)
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjMyMGM2MDRmYTU4ZmY0NDMwNzliNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTcyMjU1MCwiZXhwIjoxNjcwNTg2NTUwfQ.oyQ38MNHk_s1pdanChLsLv-fcWwt8Z4dgLMgHvIlwZg"


export const publicRequest= axios.create({
    baseURL:BASE_URL
})
export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN} `}
})