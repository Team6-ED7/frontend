import { Link } from "react-router-dom";
import LogoLandscape from "../../common/LogoLandscape";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { IconLogin2 } from "@tabler/icons-react";
import { useAuth } from "../../../hooks/useAuth";

const HeaderDashboard = ({ sidebarOpen, setSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsAuthenticated } = useAuth()

  return (
    <nav className="fixed top-0 z-50 w-full    shadow-sm mb-1">
      <div className="px-3 py-3 lg:px-5 lg:pl-3  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end gap-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${sidebarOpen ? 'hidden' : 'block'}`}>
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <Link to="/" >
              <LogoLandscape size={200} />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative flex items-center ms-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span className="sr-only">Abrir menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
              </button>
              <div
                className={`p-2 absolute right-0 top-3 mt-6 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-48 dark:bg-gray-700 dark:divide-gray-600 ${isMenuOpen ? "block" : "hidden"
                  }`}
                id="dropdown-user"
              >
                <div className="px-4  border-gray-200 border-b border-solid" role="none">
                  <p className="text-sm text-gray-900 dark:text-white" role="none">
                    Neil Sims
                  </p>
                </div>
                <ul className="py-1 flex items-center flex-col pt-3" role="none">
                  <li>
                    <Button
                      type="button"
                      color="primary"
                      variant="ghost"
                      size="sm"
                      endContent={<IconLogin2 />}
                      // className={buttonStyleConfig}
                      onClick={() => {
                        localStorage.removeItem("token")
                        setIsAuthenticated(false)
                      }}
                    >
                      Cerrar Sesion
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDashboard;
