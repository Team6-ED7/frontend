import { Input } from '@nextui-org/input';
import { Button, Checkbox } from '@nextui-org/react';
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import {
  buttonStyleConfig,
  checkBoxStyleConfig,
  inputStyleConfig,
} from '../../util/customStyles';
import { Line } from './components/Line';
import SessionHeader from '../../components/session/SessionHeader';
import SessionFooter from '../../components/session/SessionFooter';
import { SessionLayout } from '../../layouts/SessionLayout';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { apis } from '../../api/apis';


const Register = () => {
  const navigate = useNavigate()

  const [isChecked, setIsChecked] = useState(false);
  const [isErrorValidEmail, setIsErrorValidEmail] = useState(false)
  const isErrorEmail = (email) => {
    return setIsErrorValidEmail(!isEmailValid(email))
  }
  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)

  }


  const [state, setState] = useState({
    name: '',
    lastname: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(apis.auth.register, {
        "name": state.name,
        "lastname": state.lastname,
        "email": state.email,
        "password": state.password
      });

      if (data) {

        toast.success('Usuario creado con exito')
        navigate("/login")
      }

    } catch (error) {
      toast.error('Error en el registro')
      console.log(error);
    }
  }

  return (
    <SessionLayout>
      <SessionHeader title="Registrate" />
      <main>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

          <div className="flex justify-between w-full gap-5">
            <Input
              type="text"
              label="Nombre"
              placeholder="Enter your name"
              classNames={inputStyleConfig}
              isRequired
              name='name'
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Apellido"
              placeholder="Enter your Lastname"
              classNames={inputStyleConfig}
              isRequired
              name='lastname'
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <Line />
          </div>
          <div className=" gap-5 grid grid-cols-2 gap-x-5">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              classNames={inputStyleConfig}
              isRequired
              name='email'
              onChange={handleChange}
              onBlur={() => isErrorEmail(state.email)}

            />
            <Input
              type="email"
              label="Confirmar email"
              placeholder="Enter your email"
              classNames={inputStyleConfig}
              isRequired
              name='repeatEmail'
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              classNames={inputStyleConfig}
              isRequired
              name='password'
              autoComplete='off'
            />
            <Input
              type="password"
              label="Confirmar password"
              placeholder="Enter your password"
              classNames={inputStyleConfig}
              isRequired
              name='repeatPassword'
              autoComplete='off'

            />
          </div>
          <div className="flex flex-col justify-center pl-24">
            <Checkbox isRequired classNames={checkBoxStyleConfig}  >
              Acepto recibir otras comunicaciones de PickYourSeat
              <span className="text-secondary">*</span>
            </Checkbox>
            <Checkbox classNames={checkBoxStyleConfig} isRequired onClick={() => setIsChecked(!isChecked)}>
              Autorizo a PickYourSeat a almacenar y procesar mis datos
              personales<span className="text-secondary">*</span>
            </Checkbox>
          </div>
          <div className=" flex justify-center">
            <Button
              type="submit"
              color="primary"
              variant="solid"
              size="lg"
              endContent={<LoginIcon />}
              className={`${buttonStyleConfig} ${!isChecked ? ' opacity-50 pointer-events-none' : ''}`}
              disabled={!isChecked || isErrorValidEmail}
            >
              Regístrate
            </Button>
          </div>
        </form>
      </main>
      <SessionFooter message="¿Ya tienes una cuenta?" link="/login" linkText="Inicia Sesión" />
    </SessionLayout>

  );
};
export default Register;
