import './App.css'
import {Navbar} from "./components/navbar/Navbar.tsx";
import Home from "./components/Home.tsx";
import Services from "./components/Services.tsx";
import Products from "./components/Products.tsx";
import Banner from "./components/Banner.tsx";
import {useState} from "react";
import Cart from "./components/Cart.tsx";
import {Toaster} from 'react-hot-toast';

function App() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto w-full">
        <Navbar setOpenCart={setOpenCart} />
        {openCart && <Cart setOpenCart={setOpenCart} />}
        <Home />
        <div className="px-5">
          <Services />
          <Products />
          <Banner />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  )
}

export default App
