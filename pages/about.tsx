import Head from "next/head";
import { Aggutierrez } from "../components/Aggutierrez";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aggutierrez</title>
        <meta name="description" content="Agustin Gutierrez web page" />
      </Head>

      <Aggutierrez />
    </>
  );
};

export default Home;
