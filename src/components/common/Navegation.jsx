import React, { useCallback, useEffect, useState } from 'react';
import { HiMenu } from "react-icons/hi";

const Navegation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, SetIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                SetIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className='w-full fixed top-0 left-0 right-0'>
            <nav className='py-4 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : "" } '>
                <div className='flex items-center justify-between'>
                    <div className='font-bold text-2x1 cursos-pointer text-black'>
                        <a href='/'>Imagen de Logo</a>
                    </div>

                    {/*para dispositivos mas grandes*/}

                    <div className='lg:flex items-center gap-3 hidden text-stone-950'>  
                        <a href='/' className='block hover:underline py-2 px-4'>Encuentra una ubicación</a>
                        <a href='/' className='block hover:underline py-2 px-4'>Soluciones</a>
                        <a href='/' className='block hover:underline py-2 px-4'>Enterprise</a>
                        <a href='/' className='block hover:underline py-2 px-4'>Inicio de Sesion de Miembros </a>
                    </div>
                    {/*Boton de uneteya!*/}
                    <div className='lg:block hidden'>
                        <button className='px-4 py-2 border border-lime-400 rounded-md text-lime-400 hover:bg-lime-400 hover:text-white transition-all duration-300'>Agenda tu espacio</button>
                    </div>

                    {/*boton del menu para dispositivos pequenos*/}
                    <button onClick={toggleMenu} className='lg:hidden text-lime-400 text-3x1'>
                        <HiMenu/>
                    </button>
                    
                </div>
                {/* nav para telefono*/}
                {isMenuOpen &&(
                    <div className='mt-4 bg-lime-400 text-white rounded py-4'>
                        <a href='/' className='block hover:underline py-2 px-4'>Encuentra una ubicación</a>
                        <a href='/' className='block hover:underline py-2 px-4'>Soluciones</a>
                        <a href='/' className='block hover:underline py-2 px-4'>Enterprise</a>
                        <a href='/' className='block hover:underline py-2 px-4'>Inicio de Sesion de Miembros </a>
                    </div>
                )}
            </nav>
        </header>
        
    );
};

export default Navegation;