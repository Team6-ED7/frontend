import { Input } from '@nextui-org/input';
import { Button, Checkbox } from '@nextui-org/react';
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { apis } from '../../api/apis';
import SessionFooter from '../../components/session/SessionFooter';
import SessionHeader from '../../components/session/SessionHeader';
import { SessionLayout } from '../../layouts/SessionLayout';
import {
  buttonStyleConfig,
  checkBoxStyleConfig,
  inputStyleConfig,
} from '../../util/customStyles';
import { Line } from './components/Line';

const Register = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [isErrorValidEmail, setIsErrorValidEmail] = useState(false);
  const isErrorEmail = (email) => {
    return setIsErrorValidEmail(!isEmailValid(email));
  };
  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  };

  const [state, setState] = useState({
    name: '',
    lastname: '',
    email: '',
    repeatEmail: '',
    hashedPassword: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(apis.auth.register, {
        name: state.name,
        lastName: state.lastname,
        email: state.email,
        hashedPassword: state.hashedPassword,
      });

      if (data) {
        toast.success('Usuario creado con éxito' + ' ' + data.name);
        navigate('/login');
      }
    } catch (error) {
      if (error.response.data) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error('Error en el registro');
    }
  };

  return (
    <SessionLayout>
      <SessionHeader title="Regístrate" />
      <main>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex justify-between w-full gap-5">
            <Input
              type="text"
              label="Nombre"
              placeholder="Como mínimo 2 caracteres... "
              classNames={inputStyleConfig}
              isRequired
              name="name"
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Apellido"
              placeholder="Como mínimo 2 caracteres..."
              classNames={inputStyleConfig}
              isRequired
              name="lastname"
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
              placeholder="miemail@email.com"
              classNames={inputStyleConfig}
              isRequired
              name="email"
              onChange={handleChange}
              onBlur={() => isErrorEmail(state.email)}
            />
            <Input
              type="email"
              label="Confirmar email"
              placeholder="miemail@email.com"
              classNames={inputStyleConfig}
              isRequired
              name="repeatEmail"
              onChange={handleChange}
            />
            <Input
              type="hashedPassword"
              label="Contraseña"
              placeholder="Como mínimo 8 caracteres..."
              classNames={inputStyleConfig}
              isRequired
              name="hashedPassword"
              autoComplete="off"
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Confirmar contraseña"
              placeholder="Como mínimo 8 caracteres..."
              classNames={inputStyleConfig}
              isRequired
              name="repeatPassword"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-center pl-24">
            <Checkbox isRequired classNames={checkBoxStyleConfig}>
              Acepto recibir otras comunicaciones de PickYourSeat
              <span className="text-secondary">*</span>
            </Checkbox>
            <Checkbox
              classNames={checkBoxStyleConfig}
              isRequired
              onClick={() => setIsChecked(!isChecked)}
            >
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
              className={`${buttonStyleConfig} ${!isChecked ? ' opacity-50 pointer-events-none' : ''
                }`}
              disabled={!isChecked || isErrorValidEmail}
            >
              Regístrate
            </Button>
          </div>
        </form>
      </main>
      <SessionFooter
        message="¿Ya tienes una cuenta?"
        link="/login"
        linkText="Inicia sesión"
      />
    </SessionLayout>
  );
};
export default Register;
