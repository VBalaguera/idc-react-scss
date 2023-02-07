import React from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className='layout'>
        <Navbar />

        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
