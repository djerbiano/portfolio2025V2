import styles from "./page.module.css";
import { Schibsted_Grotesk } from "next/font/google";
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return <main className={` ${schibsted.className}` + " " + styles.main}></main>;
}
