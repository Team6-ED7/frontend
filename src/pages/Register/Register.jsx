import { Input } from '@nextui-org/input';
import H2title from '../../components/common/H2Title';
import LogoPortrait from '../../components/common/LogoPortrait';
import { Line } from './components/Line';

const Register = () => {
  return (
    <main className="bg-[url('/src/assets/background.svg')] max-h-screen flex flex-col flex-grow h-screen w-screen">
      <section className="w-7xl px-5 pt-10 gap-5  flex flex-col justify-center ">
        <LogoPortrait />
        <section className="max-w-4xl p-5 rounded-md bg-black bg-opacity-10">
          <header className=" flex justify-center">
            <H2title>Regístrate</H2title>
          </header>
          <main>
            <form className="flex flex-col pt-5 gap-5">
              <div className="flex justify-between w-full gap-5">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
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
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <Input
                  type="email"
                  label="Confirmar password"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex justify-between "></div>
            </form>
          </main>
          <footer></footer>
        </section>
      </section>
    </main>
  );
};
export default Register;
