import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    

        <Header />

        <main className="flex-grow">
           <Outlet />
        </main>

        <Footer />
      
    </div>
  )
}

export default Layout
