import { Cart } from "./Pages/Cart";
import Home from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Product } from "./Pages/Product";
import { ProductList } from "./Pages/ProductList";
import { Register } from "./Pages/Register";
import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom';
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";

 
function App() {

  const user = useSelector(state=> state.user.currentUser);

  useEffect(()=>{
    // console.log("Am I excuted")
    // setUser(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)
   },[user])
   //console.log("user",user)


  return (
  
    <Router>
    
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/login"  element={user?<Navigate replace to="/" />: <Login/>}/>
        <Route path="/product/:id"  element={<Product/>}/>
        <Route path="/products/:category"  element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>} /> 
        <Route path="/register"  element={<Register/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/success" element={<Success />} />
      </Routes> 

      </Router> 
  );
}

export default App;
