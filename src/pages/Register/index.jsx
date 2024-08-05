import { Button, Checkbox, Input } from '@nextui-org/react';
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import { useState } from 'react';
import { Form, useNavigate, useNavigation } from 'react-router-dom';
import SessionFooter from '../../components/session/SessionFooter';
import SessionHeader from '../../components/session/SessionHeader';
import { SessionLayout } from '../../layouts/SessionLayout';
import {
  buttonStyleConfig,
  checkBoxStyleConfig,
  inputStyleConfig,
} from '../../util/customStyles';
import { action, validateRegisterFields } from './action';
import { Line } from './components/Line';

const Register = () => {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';
  const isLoading = navigation.state === 'loading';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: validateRegisterFields({ [name]: value }),
    });
    console.log('los errors del state', errors);
  };

  return (
    <SessionLayout>
      <SessionHeader title="Registrate" />
      <main>
        <Form method="post" className="flex flex-col gap-5" action={action}>
          <div className="flex justify-between w-full gap-5">
            <Input
              name="name"
              type="text"
              label="Nombre"
              placeholder="Enter your name"
              classNames={inputStyleConfig}
              isRequired
              onChange={handleChange}
            />
            <Input
              name="LastName"
              type="text"
              label="Apellido"
              placeholder="Enter your Lastname"
              classNames={inputStyleConfig}
              onChange={handleChange}
              isRequired
            />
          </div>
          <div className="flex justify-center">
            <Line />
          </div>
          <div className=" gap-5 grid grid-cols-2 gap-x-5">
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              classNames={inputStyleConfig}
              onChange={handleChange}
              isRequired
              color={errors.email ? 'danger' : 'none'}
              errorMessage={errors.email}
            />
            <Input
              name="confirmEmail"
              type="email"
              label="Confirmar email"
              placeholder="Enter your email"
              classNames={inputStyleConfig}
              onChange={handleChange}
              isRequired
              autoComplete="email"
            />
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              classNames={inputStyleConfig}
              onChange={handleChange}
              autoComplete="new-password"
              isRequired
            />
            <Input
              name="confirmPassword"
              type="password"
              label="Confirmar password"
              placeholder="Enter your password"
              classNames={inputStyleConfig}
              onChange={handleChange}
              isRequired
              autoComplete="new-password"
            />
          </div>
          <div className="flex flex-col justify-center pl-24">
            <Checkbox
              isRequired
              classNames={checkBoxStyleConfig}
              name="acceptCommunications"
            >
              Acepto recibir otras comunicaciones de PickYourSeat
              <span className="text-secondary">*</span>
            </Checkbox>
            <Checkbox
              classNames={checkBoxStyleConfig}
              isRequired
              name="authorizePersonalData"
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
              className={buttonStyleConfig}
            >
              Regístrate
            </Button>
          </div>
        </Form>
      </main>
      <SessionFooter
        message="¿Ya tienes una cuenta?"
        link="/login"
        linkText="Inicia Sesión"
      />
    </SessionLayout>
  );
};
export default Register;
