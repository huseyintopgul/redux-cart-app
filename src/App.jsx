import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) {
      setCart([...cart, item])
    }
  };


  return (
    <div className='App'>
      <Navbar setShow={setShow} />
      {show ? <Products /> : "Sepet"}
      <Products handleClick={handleClick} />
    </div>
  )
}

export default App