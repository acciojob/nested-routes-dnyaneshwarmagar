import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <div>
        <nav>
            <ul>
                <a href='/'><li>Home</li></a>
                {/* <a href='/women'><li>Women</li></a> */}

                    <li><Link to="/women">Women</Link></li>

            </ul>
        </nav>
        <p>Index</p>
        <Outlet/>
    </div>
  )
}

export default Layout