import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/MainLayout.module.css";

interface Props {
  children: React.ReactElement;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Header />

      {children}

      <Footer />
    </main>
  );
};
