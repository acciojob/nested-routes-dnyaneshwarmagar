import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Item from './Item';

const arr = ["Grooming", "Shirt", "Trouser", "Jewellery"];
const Women = () => {
    return (
        <div>
            <p>Women</p>
            <ul>
                {arr.map((element,ind) => (<li key={ind}><Link to={`/women/${element}`}>{element}</Link></li>))}
            </ul>
        <Outlet/>
        </div>
    )
}

export default Women