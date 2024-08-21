import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import HeaderDashboard from "../../components/Dashboard/Header";
import Footer from "../../components/common/Footer";
const Dashboard = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <HeaderDashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col min-h-screen">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-grow mt-14 p-4">
          <div className="  ">
            {children}
          </div>
        </main>
        <footer className="z-10">
          <Footer />
        </footer>
      </div>
    </>

  )
}

export default Dashboard