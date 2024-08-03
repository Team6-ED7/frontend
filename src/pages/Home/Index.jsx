import { Button } from '@nextui-org/react';
import { Link } from "react-router-dom"
import { IconLogin2 as LoginIcon } from '@tabler/icons-react';
import H3title from '../../components/common/H3Title';
import LogoPortrait from '../../components/common/LogoPortrait';
import { buttonStyleConfig } from '../../util/customStyles';

const Home = () => {
  return (
    <main className="bg-[url('/src/assets/background-home.jpg')] bg-bottom bg-no-repeat bg-cover max-h-screen flex flex-col w-screen items-center justify-center ">
      <section className="max-w-4xl px-10  py-10 flex flex-col items-center gap-10 rounded-md bg-white bg-opacity-90">
        <header>
          <LogoPortrait />
        </header>
        <main>
          <H3title>Encuentra tu espacio ideal de coworking al instante</H3title>
          <p>
            Reserva el espacio perfecto para trabajar y colaborar en segundos.
            Con nuestro sistema intuitivo y fácil de usar, descubre y reserva
            oficinas, salas de reuniones y puestos de trabajo en las mejores
            ubicaciones. ¡Optimiza tu productividad y conecta con una comunidad
            de profesionales!
          </p>
          <p>¡Reserva ahora y empieza a trabajar!</p>
        </main>
        <footer className=" flex justify-center">
          <Button
            as={Link}
            to={"login"}
            color="primary"
            variant="solid"
            size="lg"
            endContent={<LoginIcon />}
            className={buttonStyleConfig}
          >
            Iniciar Sesión
          </Button>
        </footer>
      </section>
    </main>
  );
};

export default Home;
