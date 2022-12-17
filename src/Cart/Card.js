import React from 'react'
import Catagorece from './catageroy';


const Card = ({vage , handleAddItems,handleRemovItems,cartItems,Filter,word,setWord}) => {
    const cartItem= handleAddItems.quantity

  return (
    <div className='All-shopping-App' >
        <Catagorece Filter={Filter} cartItems={cartItems} vage={vage}/>
        <div className='All-Card'>
        {vage.length ? (vage.filter(cha=>cha.name.toLowerCase().includes(word)).map((item)=>{
            return(
                <div className='card' key={item.id}>
                    <div className='vage-img' key={item.id}>
                        <img src={item.img} alt='vage-img'/>
                    </div>
                    <div className='vage-text'>
                        <h3>{item.name}</h3>
                        <h4>{item.price} L.E</h4>
                    </div>
                    <div className='vage-btn'>
                            <button className="btn" type="button" onClick={()=>handleAddItems(item)}>ADD TO CART</button>   
                    </div>


                </div>
            )

        })):<h2>'there aren't items'</h2>}
    </div>
    </div>
  )
}

export default Card