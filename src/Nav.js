import React ,{useState}from 'react'
import { BsCartFill,BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom'
import ShopingCart from './Cart/ShopingCart';

const Nav = ({size,Search,setWord}) => {

  return (
    <div className='Nav'>
        <Link to='/'><img src='https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png' alt='img-ve' className='logo'/></Link>
        <div className='sear-car'> 
          <div className='search'>
            <input type='search' placeholder='seach for vegetables and fruits...' onChange={(e)=>setWord(e.target.value)} className='input-search'/>
            <button className="search-button" type="submit" >
                <BsSearch className='icon-search'/>
            </button>
          </div>
          <div className='Cart-shopping'>
           <Link to='/ShopingCart'>
           <BsCartFill className='icon-cart' />
           </Link>
            <span className='change-number'>{size}</span>
          </div>
        </div>

    </div>
    
  )
}

export default Nav