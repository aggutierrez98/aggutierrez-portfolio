import Head from "next/head";
import { ProyectCard } from "../components/ProyectCard";
import proyects from "../data/proyects.json";
import data from "../data/info.json";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aggutierrez</title>
        <meta name="description" content="Agustin Gutierrez web page" />
      </Head>

      <h1 id="#about">{data.title}</h1>

      <h2 id="#proyects">Proyects</h2>

      {proyects.frontend.map((proyect, index) => (
        <ProyectCard key={index} proyectData={proyect} />
      ))}
    </>
  );
};

export default Home;
