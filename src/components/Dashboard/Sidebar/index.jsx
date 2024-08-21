import { NavLink, useLocation } from 'react-router-dom';
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useEffect } from 'react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
      if (window.innerWidth > 1024) {
        setSidebarOpen(true);
      }
    };

    // Agregar el event listener
    window.addEventListener('resize', handleResize);


    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarOpen])
  return (
    <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-[70px] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${sidebarOpen ? 'md:translate-x-0 translate-x-0' : 'md:-translate-x-full '}`} aria-label="Sidebar">
      <div className="h-full px-3 p-2 overflow-y-auto bg-gray-100/70 dark:bg-gray-800">
        <nav className="    flex flex-col justify-between h-full ">
          <div  >
            <div className='flex   justify-between'>

              <h3 className="  ml-4 text-sm font-semibold text-bodydark2">
                Admistra tu espacio
              </h3>
              <button className='p-0'>

                <BsBoxArrowInLeft onClick={() => setSidebarOpen(prev => !prev)} />
              </button>
            </div>

            <ul className=" flex flex-col gap-1.5 mt-2">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <NavLink
                  to="/my-space"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('my-space') && 'bg-gray-300 dark:bg-meta-4'
                    }`}
                >
                  <svg width="18"
                    height="19" viewBox="0 0 1024 1024" className="icon" version="1.1" >
                    <path d="M827.862479 76.120754c-8.12453 0-16.451789 1.485658-24.662325 4.679156L531.771226 186.353272c-26.082455 10.142608-43.262227 35.258515-43.262227 63.243349v93.819636L222.307006 223.62577c-9.202681-4.141616-18.654167-6.055258-27.864016-6.055258-35.73155-0.004096-67.83957 28.783464-67.83957 67.935815v664.101237h452.381206v-90.476651h316.667253V144.041211c0-38.917881-31.896076-67.920457-67.7894-67.920457zM533.747324 859.130913v45.238326H171.84277V285.506327c0-3.391108 0.742317-6.435119 1.938215-9.154558 0.058361-0.132081 0.091126-0.295903 0.151535-0.424913 1.215352-2.617051 2.928312-4.861408 4.928984-6.745356 1.335146-1.253236 2.951861-2.060057 4.51431-2.961077 0.954261-0.546755 1.784632-1.334123 2.795207-1.739581 2.60374-1.047435 5.366183-1.627978 8.136817-1.645384 0.044027 0 0.090102-0.026621 0.134128-0.026621 2.497256 0.001024 4.97813 0.774057 7.441599 1.656647 0.615355 0.221159 1.24914 0.139248 1.859376 0.414673l166.810373 75.065129 99.39162 44.726383 24.104308 10.847041 26.359928 11.861711a22.652439 22.652439 0 0 1 13.33713 20.627194v431.123298z m316.66623-45.238325H578.98565V428.006591c0-26.702929-15.659302-50.922937-40.011391-61.880557l-5.226935-2.352889V249.597645c0-9.399267 5.660038-17.674308 14.421425-21.080775l271.428928-105.556434c2.733774-1.062793 5.51567-1.601357 8.265826-1.601356 10.846017 0 22.551074 8.672309 22.551075 22.682131v669.851377z" fill="#22C67F" />
                    <path d="M319.821844 399.728926h86.328891v86.328892h-86.328891zM319.821844 561.594957h86.328891v86.328892h-86.328891zM309.031117 712.669237h107.910346V885.325995H309.031117zM751.464252 281.027853h86.328891v86.328891h-86.328891zM751.464252 442.89286h86.328891v86.328891h-86.328891zM578.807494 626.34137h107.910346v172.656758H578.807494z" fill="#74E8AE" />
                  </svg>
                  Mis reservas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/floor-two"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('floor-two') && 'bg-gray-300 dark:bg-meta-4'
                    }`}
                >
                  <svg width="18"
                    height="19" viewBox="0 0 1024 1024" className="icon" version="1.1" ><path d="M658.461676 324.594173V95.397443h-270.868862v41.672133h229.19673V512.118771h-83.344266v41.672132h208.360664v-41.672132h-83.344266v-145.852465h229.19673v520.901659h-229.19673v-187.524597h-41.672132v187.524597h-479.229527v-333.377062h145.852465v-41.672132h-145.852465v-375.049195h145.852465v-41.672133h-187.524597v833.442655h833.442654v-604.245925z" fill="#22C67F" /><path d="M825.150207 407.938439v416.721327h-166.688531v62.508199H887.658406v-479.229526zM554.281344 824.659766h-416.721327v62.508199h479.229527v-145.852464h-62.5082zM554.281344 178.741709h62.5082v333.377062h-62.5082z" fill="#74E8AE" /></svg>
                  Piso 2
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/floor-one"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('floor-one') && 'bg-gray-300 dark:bg-meta-4'
                    }`}
                >
                  <svg width="18"
                    height="19" viewBox="0 0 1024 1024" className="icon" version="1.1" ><path d="M658.461676 324.594173V95.397443h-270.868862v41.672133h229.19673V512.118771h-83.344266v41.672132h208.360664v-41.672132h-83.344266v-145.852465h229.19673v520.901659h-229.19673v-187.524597h-41.672132v187.524597h-479.229527v-333.377062h145.852465v-41.672132h-145.852465v-375.049195h145.852465v-41.672133h-187.524597v833.442655h833.442654v-604.245925z" fill="#22C67F" /><path d="M825.150207 407.938439v416.721327h-166.688531v62.508199H887.658406v-479.229526zM554.281344 824.659766h-416.721327v62.508199h479.229527v-145.852464h-62.5082zM554.281344 178.741709h62.5082v333.377062h-62.5082z" fill="#74E8AE" /></svg>
                  Piso 1 (Planta baja)
                </NavLink>
              </li>
            </ul>
          </div>


        </nav>

      </div>
    </aside>
  );
};

export default Sidebar;
