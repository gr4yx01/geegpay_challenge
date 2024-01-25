// import { useState } from 'preact/hooks'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardLayout from "./DashboardLayout"
import Analytics from "./Analytics"

const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        path: '',
        Component: Analytics,
      },
    ],
  }
])


export function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}
