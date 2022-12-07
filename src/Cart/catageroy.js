
import React from 'react'
import ShopingCart from './ShopingCart'

const catageroy = ({Filter,cartItems,vage}) => {

  const onFilter=(cat)=>{
    Filter(cat)
  }

  return (
    <div className='catagory'> 

        <div>
          <button onClick={()=> onFilter('All')}>All</button>
          <button onClick={()=> onFilter('vegetable')}>vegetable</button>
          <button onClick={()=> onFilter('fruits')}> fruits</button>
        </div> 

        
    </div>
  )
}

export default catageroy
