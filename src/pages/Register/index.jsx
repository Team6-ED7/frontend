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


const Register = () => {

  return (
    <SessionLayout>
      <SessionHeader title="Registrate" />
      <main>
        <form className="flex flex-col gap-5">
          <div className="flex justify-between w-full gap-5">
            <Input
              type="text"
              label="Nombre"
              placeholder="Enter your name"
              classNames={inputStyleConfig}
              isRequired
            />
            <Input
              type="text"
              label="Apellido"
              placeholder="Enter your Lastname"
              classNames={inputStyleConfig}
              isRequired
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
            />
            <Input
              type="email"
              label="Confirmar email"
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
            <Input
              type="password"
              label="Confirmar password"
              placeholder="Enter your password"
              classNames={inputStyleConfig}
              isRequired
            />
          </div>
          <div className="flex flex-col justify-center pl-24">
            <Checkbox isRequired classNames={checkBoxStyleConfig}>
              Acepto recibir otras comunicaciones de PickYourSeat
              <span className="text-secondary">*</span>
            </Checkbox>
            <Checkbox classNames={checkBoxStyleConfig} isRequired>
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
        </form>
      </main>
      <SessionFooter message="¿Ya tienes una cuenta?" link="/login" linkText="Inicia Sesión" />
    </SessionLayout>

  );
};
export default Register;
