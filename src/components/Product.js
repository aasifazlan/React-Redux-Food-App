import React, { useEffect, useState } from 'react'
import {MENU_ITEM_IMG_URL} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import { Shimmer } from './Shimmer'
 
 

const Product = () => {
    const [product, setProduct]=useState(null)
    const [filteredProduct, setFilteredProduct]=useState(null)
    const [searchProduct, setSearchProduct]=useState()
    const dispatch = useDispatch()
    

    const fetchProduct = async () => {
        try {
          const lat = '28.6318545';
          const lng = '77.2203533'
          // const apiKey='https://api.escuelajs.co/api/v1/products'
            const response = await fetch(`https://www.swiggy.com/mapi/homepage/getCards?lat=${lat}&lng=${lng}`)
            const data = await response.json()
            console.log(data)
            const restaurants = data?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants ;
            setProduct(restaurants)
            console.log(restaurants[2].info.name)
        } catch (error) {
            console.error('Error')
        }
   }

   useEffect(() => {
    fetchProduct();
    
   }, [])
  console.log(product?.[5]?.info?.name)

 const AddToCart=(pro)=>{
  dispatch(add(pro))
 }
 const HandleKey =(e)=>{
  if(e.key==='Enter'){
    const filteredRestaurants =product.filter((prodinfo)=>prodinfo.info.name.toLowerCase().includes(searchProduct.toLowerCase()));
    setFilteredProduct(filteredRestaurants);
    console.log(filteredProduct)
  }
 }
 const HandleFilter=()=>{
   
  const filteredRestaurants = product.filter((prodinfo)=>prodinfo.info.name.toLowerCase().includes(searchProduct.toLowerCase()));
  setFilteredProduct(filteredRestaurants);
  console.log(filteredRestaurants)
  
} 
  

// const { name, cloudinaryImageId, id } = product.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants[1].info;
// console.log(name);
if (product===null) return <Shimmer/>;
  return (
    <div className='mt-12 mb-10 min-w-full '>

<div className='bg-white ml-4'>
        <input onKeyDown={HandleKey} value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)} type="text" placeholder='search the food' className='
        outline-none p-1 pl-1 ml-2 w-[130px] ' />
        <button onClick={()=> HandleFilter()} className='bg-transparent ml-0'>Search</button>
         
        <button onClick={()=>{
          const sortedRestaurants = product.sort((a, b)=>b.info.rating-a.info.rating);
          setFilteredProduct(sortedRestaurants);
          console.log(filteredProduct)
        }} className='ml-5'>Top Rated Restaurants</button>
       
      </div>
      <h1 className='ml-5 font-bold text-3xl mt-7'>What's on your mind?  </h1>
      <div className='w-full h-17 flex overflow-x-auto space-x-4 py-4 '>
        
        {product.map((resCrd)=><div key={resCrd.info.id} className='flex flex-col shrink-0 m-3'>
        <img className='w-[150px] h-[120px] rounded-md' src={MENU_ITEM_IMG_URL + resCrd.info.cloudinaryImageId} alt="" />
        <h1 className='max-w-[150px] truncate text-center'>{resCrd.info.cuisines}</h1>
        </div>)}
      </div>

     
      
      
    <div className='flex flex-wrap mt-4'>
      {product.map((res)=><div key={res.info.id}>
        <div className='w-[220px] min-h-[160px] mt-5 ml-4 rounded-md flex flex-col flex-wrap items-center justify-center '>
               <img className='w-[220px] h-[160] rounded-md' src={MENU_ITEM_IMG_URL + res.info.cloudinaryImageId} alt="" />
               <h2>{res.info.name}</h2>
           <div className='flex justify-between items-center'>
             <p className=''>{res.info.costForTwo}</p>
             <p className='right-0 ml-4'>{res.info.avgRating}  </p>
             
             <img src="" alt="" />
             <img src="" alt="" />
           </div>
           <div className='flex justify-between items-center'>
            <p className='mr-6'>{res.info.sla.deliveryTime}  </p>
            <button onClick={()=>AddToCart(res)} className='bg-blue-500 rounded-md px-4'>Add</button>
            </div>
      </div>

      </div>)}
      
    </div>
    </div>
  )
}

export default Product
 
