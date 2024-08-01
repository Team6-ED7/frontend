import { Button, Link } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import LogoPortrait from '../components/common/LogoPortrait';
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import { buttonStyleConfig, inputStyleConfig } from '../util/customStyles';
import H2title from '../components/common/H2Title';

const Login = () => {
  return (
    <main className="bg-pattern">
      <section className="min-h-dvh flex flex-col justify-center items-center md:gap-10 mx-4 md:mx-10">
        <div className="md:hidden">
          <LogoPortrait size={260} />
        </div>
        <div className="hidden md:block">
          <LogoPortrait />
        </div>
        <div className="w-full rounded-md backdrop-blur-sm bg-black/20 p-10 flex flex-col gap-6 sm:gap-8 sm:w-128">
          <header>
            <H2title className="text-center text-xl font-semibold lg:w-60 lg:text-left font-poppins">
              Inicia Sesión en tu cuenta para continuar
            </H2title>
          </header>
          <form className="flex flex-col gap-6 sm:gap-8">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              classNames={inputStyleConfig}
              isRequired
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              classNames={inputStyleConfig}
              isRequired
            />
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
              <Link
                to="#"
                color="secondary"
                className="font-poppins text-tertiary hover:cursor-pointer hover:underline hover:text-blue-500 hover:underline-offset-4 md:self-end"
              >
                ¿Olvidaste tu contraseña?
              </Link>
              <Button
                type="submit"
                color="primary"
                variant="solid"
                size="lg"
                endContent={<LoginIcon />}
                className={buttonStyleConfig}
              >
                Iniciar Sesión
              </Button>
            </div>
          </form>
          <footer>
            <span className="font-poppins font-normal text-black">¿No tienes cuenta?</span>
            <Link to="/register"className="font-poppins text-tertiary ml-2 hover:cursor-pointer hover:underline
              hover:text-blue-500 hover:underline-offset-4">Regístrate
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Login;
