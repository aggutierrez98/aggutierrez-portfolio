import { m } from "framer-motion";
import { boxVariant, logoVariant } from "./variants";
import Link from "next/link";
import styles from "./styles.module.css";

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
  tabIndex?: number;
  width?: number;
  height?: number;
}

export const Logo = ({ className, tabIndex, width, height }: Props) => (
  <Link href="/" passHref scroll={false}>
    <m.svg
      width={width ? width : 45}
      height={height ? height : 45}
      tabIndex={tabIndex || -1}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.logo} ${className ? className : ""}`}
      viewBox="0 0 40 40"
    >
      <m.path
        d="M1 30V10C1 5.02944 5.02944 1 10 1H30C34.9706 1 39 5.02944 39 10V30C39 34.9706 34.9706 39 30 39H10C5.02944 39 1 34.9706 1 30Z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="initial"
        animate="visible"
        variants={boxVariant}
      />
      {/* Agg path */}
      <m.path
        d="M23 29L21.8727 24.2663C21.8352 24.1092 21.9544 23.9583 22.1159 23.9583H31.3117C31.4232 23.9583 31.5212 24.0322 31.552 24.1394L33.9085 32.3477C33.9543 32.5075 33.8344 32.6667 33.6682 32.6667H20.4228M20.4228 32.6667H5.85379C5.69057 32.6667 5.57112 32.5128 5.61159 32.3547L12.0532 7.18802C12.0815 7.07739 12.1812 7.00001 12.2954 7.00001H14.9864C15.1053 7.00001 15.2077 7.08364 15.2314 7.20007L20.4228 32.6667ZM23 14H28.3099C28.4222 14 28.5208 14.0749 28.5508 14.1832L30.4121 20.8915C30.4563 21.0508 30.3365 21.2083 30.1712 21.2083H21.493C21.3751 21.2083 21.2733 21.126 21.2486 21.0108L18.3057 7.30248C18.2723 7.14683 18.391 7.00001 18.5502 7.00001H27"
        strokeWidth={2}
        initial="initial"
        animate="visible"
        variants={logoVariant}
      />
      <m.path
        initial="initial"
        animate="visible"
        variants={logoVariant}
        d="M28 7C28 7.55228 27.5523 8 27 8C26.4477 8 26 7.55228 26 7C26 6.44772 26.4477 6 27 6C27.5523 6 28 6.44772 28 7Z"
      />
      <m.path
        initial="initial"
        animate="visible"
        variants={logoVariant}
        d="M24 29C24 29.5523 23.5523 30 23 30C22.4477 30 22 29.5523 22 29C22 28.4477 22.4477 28 23 28C23.5523 28 24 28.4477 24 29Z"
      />
      {/* <circle cx="23" cy="14" r="1" fill="#00ADB5" /> */}
    </m.svg>
  </Link>
);
