import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEM_IMG_URL } from '../utils/constants'
import { remove } from '../store/cartSlice'

const Cart = () => {
     
    const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
 
   console.log(cartItems)
  

  const RemoveFromCart=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div className='mt-14'>
        {cartItems.map((item)=>
         <div key={item.info.id} className='w-[180px] min-h-[100px] bg-slate-200 mt-5 ml-4 rounded-md flex flex-col flex-wrap items-center justify-center '>
         <img className='' src={MENU_ITEM_IMG_URL + item.info.cloudinaryImageId} alt="" />
         <h2>{item.info.name}</h2>
            <div className='flex justify-between items-center'>
              {/* <p>{res.info.costForTwo}</p> */}
           </div>
         <button onClick={()=>RemoveFromCart(item.info.id)} className='bg-red-500 rounded-md px-4'>Remove</button>
 
       </div>)}
        
      </div>
    
  )
}

export default Cart
