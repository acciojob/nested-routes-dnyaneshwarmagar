
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Women from "./Women";
import Item from "./Item";

const App = () => {
  return (
    <main>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/women" element={<Women/>}>
              <Route path=":category" element={<Item/>}></Route>
            </Route>
          </Route>
        </Routes>

        <nav>
            <ul>
                <a href='/'><li>Home</li></a>
                </ul>
                </nav>
    </main>
  )
}

export default App
