import { GetServerSideProps } from "next";

const ProjectImage = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  return {
    redirect: {
      permanent: false,
      destination: `/projects/${req.params!.name}`,
    },
  };
};

export default ProjectImage;
