import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function Layout() {
  return (
    <nav>
      <Link to="/favorites">Favorites</Link>
    </nav>
  )
}


export default Layout;