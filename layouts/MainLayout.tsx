import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/MainLayout.module.css";
import { CustomToastsContainer } from "../components/CustomToastsContainer";
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
