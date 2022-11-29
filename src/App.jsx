import { Cart } from "./Pages/Cart";
import Home from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Product } from "./Pages/Product";
import { ProductList } from "./Pages/ProductList";
import { Register } from "./Pages/Register";
import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom';
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user=useSelector(state=> state.user.currentUser);
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
