import Head from "next/head";
import { ProyectCard } from "../components/ProyectCard";
import proyects from "../data/proyects.json";

const Proyects = () => {
  return (
    <>
      <Head>
        <title>Proyects</title>
        <meta name="description" content="Proyects made by aggutierrez" />
      </Head>

      <h1>Proyects</h1>

      {proyects.frontend.map((proyect, index) => (
        <ProyectCard key={index} proyectData={proyect} />
      ))}
    </>
  );
};

export default Proyects;
