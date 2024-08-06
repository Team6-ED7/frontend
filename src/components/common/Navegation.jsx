import {useState } from 'react';
import { HiMenu } from "react-icons/hi";
import LogoPortrait from '../../components/common/LogoPortrait';
import { Button} from '@nextui-org/react';
import { buttonStyleConfig } from '../../util/customStyles';
import { Link } from 'react-router-dom';




const Navegation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    

   
    return ( 
        <header className='w-full fixed top-0 left-0 right-0'>
            <nav className='py-4 md:px-8 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : "" } '>
                <div className='flex items-center justify-between '>
                    <div className='cursor-pointer flex items-center'>
                        < LogoPortrait height={60}/>
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
                        <Button color='primary' variant='solid' size='lg' className={buttonStyleConfig} as={Link} to={"login"}>Agenda tu espacio</Button>
                    </div>

                    {/*boton del menu para dispositivos pequenos*/}
                    <button onClick={toggleMenu} className='lg:hidden text-black text-3x1'>
                        <HiMenu/>
                    </button>
                    
                </div>
                {/* nav para telefono*/}
                {isMenuOpen &&(
                    <div className='mt-4 bg-white-400 text-black rounded py-4'>
                        <a href='/' className='block hover:text-gray-500 py-2 px-4 text-center'>Encuentra una ubicación</a>
                        <a href='/' className='block hover:text-gray-500 py-2 px-4 text-center'>Soluciones</a>
                        <a href='/' className='block hover:text-gray-500 py-2 px-4 text-center'>Enterprise</a>
                        <a href='/' className='block hover:text-gray-500 py-2 px-4 text-center'>Inicio de Sesion de Miembros </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navegation;