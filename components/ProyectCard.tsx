interface Proyect {
  title: string;
  description: string;
  github_url: string;
  demo_url: string;
  image_url?: string;
}

interface Props {
  proyectData: Proyect;
}

export const ProyectCard = ({
  proyectData: { title, description, github_url, demo_url, image_url },
}: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>{github_url}</p>
      <p>{demo_url}</p>
    </div>
  );
};
