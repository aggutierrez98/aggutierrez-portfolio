import styles from "./styles.module.css";
import { CustomToastsContainer, Header, Footer } from "components";
interface Props {
  children: React.ReactElement;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Header />
      <main className={styles.body}>{children}</main>
      <Footer />
      <div id="modal"></div>
      <div id="loader"></div>
      <CustomToastsContainer />
    </main>
  );
};
