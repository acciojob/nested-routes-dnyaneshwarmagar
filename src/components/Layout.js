import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <div>
        <nav>
        <a href='/'><li>Home</li></a>
        {/* <a href='/women'><li>Women</li></a> */}

            <li><Link to="/women">Women</Link></li>
        </nav>
        <p>Index</p>
        <Outlet/>
    </div>
  )
}

export default Layout