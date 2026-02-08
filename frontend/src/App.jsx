import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productlist from './pages/Productlist.jsx';
import Cart from "./pages/Cart.jsx";
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
    
      <Route path='/' element={<Productlist/>}/> 
      <Route path='/cart' element={<Cart/>}/> 

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
