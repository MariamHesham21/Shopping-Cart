import React from 'react'
import {Link} from 'react-router-dom'


const ShopingCart = ({cartItems,handleAddItems,handleRemovItems,handleRemove}) => {
    const totalPrice= cartItems.reduce((price,item)=>price +item.quantity * item.price,0)



  return (
    <div className='ShopingCart'>
        <div className='Cart-header'><h1> Shopping Cart</h1></div>
        {cartItems.length === 0 && 
        <div className='cart-empty'> 
        <div className='img-empty'>
            <img src='https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png' alt='empty img'/>
        </div>
        <div className='text-empty'>
            <h3>You cart is empty!</h3>
            <Link to='/'>
                <button> Add Items </button>
            </Link>
        </div> 
        </div>}

        <div className='Cart-complete'>
            {cartItems.map((item)=>(
                <div className='Cart-Shop-ID' key={item.id}>
                <div className='All-Cart' >
                    <img src={item.img } alt='cart-img'/>
                    <div className='disply-cart'>
                    <div className='cart-name'>
                        <p>{item.name}</p>
                        <p><span>{item.price} L.E</span></p>
                    </div>
                    <div className='vage-input'>
                        <button onClick={()=>handleRemovItems(item)}>-</button>
                        <input type="text" className="quantity" value={item.quantity}/>
                        <button onClick={()=>handleAddItems(item)}>+</button>
                    </div>
                    <div className='cart-price'>
                    </div>
                    <div className='All-price'>
                        <p>Total = {item.price * item.quantity} l.e</p>
                    </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='total-price'>
            {cartItems.length === 0? null:
            <div className='cheake-out'>
                <div>Total Price: {totalPrice}L.E</div>
                <a href='/'><button> Cheake Out </button></a>
            </div>}
        </div>
        
    </div>
  )
}

export default ShopingCart