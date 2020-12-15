import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import '../reset.css'

export default function Layout ({ children }) {
    return (
        <div>
            <Helmet>
              <meta charSet="utf-8" />
            </Helmet>
            
            <Navbar/>
              {children}
            <Footer/>
        </div>
    )
}