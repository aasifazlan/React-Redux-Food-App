import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import {Provider} from 'react-redux'
import Body from './Body'
import Header from './Header'
import Error from './Error'
import store from '../store/store'
import Cart from './Cart'
import Footer from './Footer'
 

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header/>
         
      <Outlet/>
      <Footer/>
      </Provider>
    </div>
  )
}

 const appRouter=createBrowserRouter([{
    path: '/',
    element : <App/>,
    children:[
      { path: '/', element: <Body/>},
      { path: '/cart', element: <Cart/>},
  ],
  errorElement:  <Error/>
 }])

 const root=ReactDOM.createRoot(document.getElementById('root'))
 root.render(<RouterProvider router={appRouter} />)
