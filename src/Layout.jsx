import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import CursorEffect from './components/cursor/CursorEffect';
import { Analytics } from "@vercel/analytics/react"

function Layout() {

  


  return (
    <>
    <CursorEffect />
    <Header/>
    <main className="main">
        <Outlet/>
    </main>
    <Analytics />
    </>
  )
}

export default Layout

