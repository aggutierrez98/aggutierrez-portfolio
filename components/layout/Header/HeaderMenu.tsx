import React, {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./styles.module.css";
import { HeaderLink } from "./HeaderLink";
import { HeaderButtonMenu } from "./HeaderButtonMenu";
import { SideMenu } from "./SideMenu";
import { useOutsideAndEscapeKeyAlerter } from "hooks";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { headerListVariant } from "./variants";
export const HeaderMenu = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const onClose = () => setShowSideMenu(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLLabelElement>(null);
  useOutsideAndEscapeKeyAlerter(
    menuRef,
    onClose,
    //@ts-ignore
    buttonRef as RefObject<HTMLButtonElement>
  );

  useEffect(() => {
    const mainElement = document.getElementById("main-layout");
    if (showSideMenu) mainElement?.classList.add("blur");
    else mainElement?.classList.remove("blur");
  }, [showSideMenu]);

  const toogle = () => setShowSideMenu((prevShowing) => !prevShowing);

  return (
    <menu className={styles.menu}>
      <m.ul initial="hidden" animate="visible" variants={headerListVariant}>
        <HeaderLink href="/#home" title="Home" />
        <HeaderLink href="/#about" title="About" />
        <HeaderLink href="/#experience" title="Experience" />
        <HeaderLink href="/#projects" title="Projects" />
        <HeaderLink href="/#contact" title="Contact" />
      </m.ul>
      <HeaderButtonMenu
        action={() => setShowSideMenu(!showSideMenu)}
        value={showSideMenu}
        refValue={buttonRef}
      />
      <SideMenu isShowing={showSideMenu} refValue={menuRef} toogle={toogle} />
    </menu>
  );
};
