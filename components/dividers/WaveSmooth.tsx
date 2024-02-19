import styles from "./styles.module.css";
interface Props {
  alt: "light" | "dark";
}

export const WaveSmooth = ({ alt }: Props) => (
  <svg
    className={alt === "dark" ? styles.divider1 : styles.divider2}
    id="visual"
    viewBox="0 0 4000 300"
    width="4000"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <rect x="0" y="0" width="4000" height="300"></rect>
    <path
      d="M0 107L166.7 126.8C333.3 146.7 666.7 186.3 1000 202.8C1333.3 219.3 1666.7 212.7 2000 195.8C2333.3 179 2666.7 152 3000 146.5C3333.3 141 3666.7 157 3833.3 165L4000 173L4000 301L3833.3 301C3666.7 301 3333.3 301 3000 301C2666.7 301 2333.3 301 2000 301C1666.7 301 1333.3 301 1000 301C666.7 301 333.3 301 166.7 301L0 301Z"
      fill="currentColor"
    ></path>
  </svg>
);
