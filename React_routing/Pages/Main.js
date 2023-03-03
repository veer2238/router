import React from 'react'
import { Link,Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>

    <nav>
    <ul>
      <li>
      
        <Link to="/home">Home</Link>
      </li>
      
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/service">service</Link>
      </li>
    </ul>
  </nav>

  <Outlet />

    
    </div>
  )
}

export default Main