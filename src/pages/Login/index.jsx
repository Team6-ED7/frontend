import { Button, Link } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import { IconEye, IconEyeOff, IconLogin2 as LoginIcon } from '@tabler/icons-react';
import { buttonStyleConfig, inputStyleConfig } from '../../util/customStyles';
import { SessionLayout } from '../../layouts/SessionLayout';
import SessionFooter from '../../components/session/SessionFooter';
import SessionHeader from '../../components/session/SessionHeader';
import { useState } from 'react';
import { apis } from '../../api/apis';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
const Login = () => {
  const { setIsAuthenticated } = useAuth()

  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email' && !isEmailValid(value)) {
      return;
    }
    setState({
      ...state,
      [name]: value
    })
  }
  const isErrorEmail = (email) => {
    return setIsError(!isEmailValid(email))
  }
  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(apis.auth.login, state);

      if (data) {
        toast.success(`Bienvenido ${data.name}`)
        setIsAuthenticated(true)
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.name);
        navigate("/floor-one")
      }
    } catch (error) {
      if (error.response.data) {
        toast.error("Credenciales incorrectas")
        return
      }
      toast.error(' Error en el inicio de sesión')

    }
  }

  return (
    <>
      <SessionLayout>
        <SessionHeader title="Inicia Sesion" />
        <main>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            <Input
              type="email"
              label="Email"
              placeholder="Ingresa tu email"
              classNames={inputStyleConfig}
              isRequired
              onChange={handleChange}
              name="email"
              onBlur={() => isErrorEmail(state.email)}
            />
            <Input
              autoComplete='off'
              type={showPassword ? 'text' : 'password'}
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              classNames={inputStyleConfig}
              isRequired
              onChange={handleChange}
              name="password"
              endContent={showPassword
                ?
                <IconEyeOff className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                :
                <IconEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
            />
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
              {isError ? <p className={`text-red-500 p-0  `}> El email es incorrecto</p> : ''}
              <Link
                to="#"
                color="secondary"
                className="font-poppins text-tertiary hover:cursor-pointer hover:underline hover:text-blue-500 hover:underline-offset-4 md:self-end"
              >
                ¿Olvidaste tu contraseña?
              </Link>
              <Button
                disabled={!state.email || !state.password || isError}
                type="submit"
                color="primary"
                variant="solid"
                size="lg"
                endContent={<LoginIcon />}
                className={`${buttonStyleConfig} ${!state.email || !state.password ? 'opacity-50 pointer-events-none' : ''}`}
              >
                Iniciar Sesión
              </Button>
            </div>
          </form>
        </main>
        <SessionFooter message="¿No tienes cuenta?" link="/register" linkText="Regístrate" />
      </SessionLayout>

    </>

  );
};

export default Login;
