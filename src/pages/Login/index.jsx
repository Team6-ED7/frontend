import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Link } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import { buttonStyleConfig, inputStyleConfig } from '../../util/customStyles';
import { SessionLayout } from '../../layouts/SessionLayout';
import SessionFooter from '../../components/session/SessionFooter';
import SessionHeader from '../../components/session/SessionHeader';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    }

  }, [isAuthenticated, navigate])


  return (
    <SessionLayout>
      <SessionHeader title="Inicia Sesion" />
      <main>
        <form className="flex flex-col gap-5">

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
      </main>
      <SessionFooter message="¿No tienes cuenta?" link="/register" linkText="Regístrate" />
    </SessionLayout>
  );
};

export default Login;
