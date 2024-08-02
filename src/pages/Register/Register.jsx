import { Input } from '@nextui-org/input';
import { Button, Checkbox } from '@nextui-org/react';
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import H2title from '../../components/common/H2Title';
import LogoPortrait from '../../components/common/LogoPortrait';
import {
  buttonStyleConfig,
  checkBoxStyleConfig,
  inputStyleConfig,
} from '../../util/customStyles';
import { Line } from './components/Line';

const Register = () => {
  return (
    <main className="bg-[url('/src/assets/background.svg')] max-h-screen flex flex-col h-screen w-screen items-center justify-center">
      <section className="w-7xl px-10  py-10 flex flex-col items-center gap-10">
        <LogoPortrait />
        <section className="max-w-4xl p-10 rounded-md bg-black bg-opacity-10 flex flex-col gap-5">
          <header className=" flex justify-center">
            <H2title>Regístrate</H2title>
          </header>
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
          <footer className="flex justify-center gap-1 font-medium font-poppins text-foreground items-baseline">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login" className="text-tertiary cursor-pointer ">
              Inicia sesión
            </Link>
          </footer>
        </section>
      </section>
    </main>
  );
};
export default Register;
