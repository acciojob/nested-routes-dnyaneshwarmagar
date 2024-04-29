import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <div>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
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