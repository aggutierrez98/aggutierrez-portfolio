import styles from "./styles.module.css";
import { CustomToastsContainer, Header, Footer } from "components";
import { ScrollToTopButtton } from "./ScrollToTopButtton";
interface Props {
  children: React.ReactElement;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className={styles.main} id="main-layout">
      <div id="top-section"></div>
      <Header />
      <main className={styles.body} id="body">
        {children}
      </main>
      <Footer />
      <div id="modal"></div>
      <div id="loader"></div>
      <div id="side-menu"></div>
      <CustomToastsContainer />
      <ScrollToTopButtton />
    </main>
  );
};
