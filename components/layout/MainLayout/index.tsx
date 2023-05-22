import styles from "./styles.module.css";
import { CustomToastsContainer, Header, Footer } from "components";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { MediaData } from "../../../interfaces/index";
interface Props {
  children: React.ReactElement;
  socialMediaData?: MediaData;
}

export const MainLayout = ({ children, socialMediaData }: Props) => {
  return (
    <main className={styles.main} id="main-layout">
      <div id="top-section"></div>
      <Header />
      <main className={styles.body} id="body">
        {children}
      </main>
      <Footer socialMediaData={socialMediaData} />
      <div id="modal"></div>
      <div id="loader"></div>
      <div id="side-menu"></div>
      <CustomToastsContainer />
      <ScrollToTopButton />
    </main>
  );
};
