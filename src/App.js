import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Nav from './Nav';
import Card from './Cart/Card';
import {Data} from './Data'
import{useState} from 'react'
import ShopingCart from './Cart/ShopingCart'
import Catagorece from './Cart/catageroy';

function App() {
  const [vage, setVage] = useState(Data)
  const [cartItems , setCartItems] = useState([])


  const handleAddItems =(pro)=>{
    const product = cartItems.find((item)=>item.id === pro.id)
    if(product){
      setCartItems(cartItems.map((item)=>item.id === pro.id ? {...product, quantity:product.quantity +1}:item))
      console.log('add')
    }
    else{
      setCartItems([...cartItems,{...pro, quantity:1}])
      console.log('try add')
    }
  }

  const handleRemovItems =(pro)=>{
    const product = cartItems.find((item)=>item.id === pro.id)
    if(product.quantity ===1){
      setCartItems(cartItems.filter((item)=> item.id !==pro.id))
    }
    else{
      setCartItems(cartItems.map((item)=>item.id === pro.id ? {...product, quantity:product.quantity -1}:item))
    }
  }


    // filter by catagory
    const Filter =(cat)=>{
      if( cat === 'All')
      {
        setVage(Data)
      }
      else{
      const newArr= Data.filter((item)=>item.category===cat)
      setVage(newArr)
      console.log(newArr)
    }
    }

  return (
    <div className="App">

      <BrowserRouter>
      <Nav size={cartItems.length} />
      <Routes>
        <Route path='/' element={<Card vage={vage} cartItems={cartItems} handleAddItems={handleAddItems} handleRemovItems={handleRemovItems} Filter={Filter}  />}/>
        <Route path='/ShopingCart' element={<ShopingCart cartItems={cartItems} handleAddItems={handleAddItems} handleRemovItems={handleRemovItems}  />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
