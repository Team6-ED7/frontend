import { Link } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import LogoPortrait from '../components/common/LogoPortrait';
import ButtonCta from '../components/common/ButtonCta';

const Login = () => {
  return (
    <main className="min-h-dvh flex flex-col justify-center items-center md:gap-10 mx-4 md:mx-10">
      <div className="md:hidden">
        <LogoPortrait size={260} />
      </div>
      <div className="hidden md:block">
        <LogoPortrait />
      </div>
      <div className="w-full rounded-md backdrop-blur-sm bg-black/20 p-10 flex flex-col gap-8 sm:w-128">
        <h2 className="text-center text-xl font-semibold lg:w-60 lg:text-left font-poppins">
          Inicia Sesión en tu cuenta para continuar
        </h2>
        <form className="flex flex-col gap-8">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="text-gray-500"
            classNames={{
              label: 'text-red-500',
            }}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            className="text-gray-500"
          />
          <div className="flex flex-col gap-8 items-center text-center">
            <Link href="#" color="secondary" className='font-poppins text-tertiary hover:underline hover:text-blue-500 hover:underline-offset-4 md:self-end'>
              ¿Olvidaste tu contraseña?
            </Link>
            <ButtonCta>Iniciar Sesión</ButtonCta>
            <p className='font-poppins font-normal text-black'>¿No tienes cuenta? 
              <a href="/register" className='text-tertiary ml-2 hover:underline hover:text-blue-500 hover:underline-offset-4'>Regístrate</a>
            </p>
          </div>
        </form>
        {/* <footer></footer> */}
      </div>
    </main>
  );
};

export default Login;
