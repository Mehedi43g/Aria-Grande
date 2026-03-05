import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Layout = () => {
  return (
    <div>  
       <div className="flex flex-col min-h-screen">
      {/* <Header/> */}
      <main className="grow">
        <Outlet />
      </main>

      <dev className="">
        <Footer/>
      </dev>
    </div>
    </div>
  )
}

export default Layout