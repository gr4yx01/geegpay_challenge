import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-primary">
     <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <Header />
        <div className="m-8 h-[70%] ">
            <div className="w-full mx-auto">
              {/* Render child routes using Outlet */}
              <Outlet />
            </div>
          </div>
      </main>
      </div>
      </div>
  )
}

export default DashboardLayout