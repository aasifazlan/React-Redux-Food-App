import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
 

const Header = () => {

  const cartItems = useSelector(state => state.cart)
  return (
    <div className='bg-green-400 fixed w-full top-0'> 
      <div className='flex items-center justify-between h-11 mx-5 text-center sm:text-left '>
        <h2 className='font-quicksand font-semibold'>Foodiee</h2>
         
       
        <div className='flex justify-around '>
        <Link to='/' className='mx-5'>Home</Link>
        <Link to='/cart'>Cart {cartItems.length}</Link>
        </div>
      
      </div>
    </div>
  )
}

export default Header
