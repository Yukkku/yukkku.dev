import type { JSX } from "solid-js";
import Header from "../../components/header";
import styles from "./index.module.css";

export const Frame = (props: { children?: JSX.Element, title?: string }) => {
  return (<>
    <Header />
    <main class={styles.main}>
      {props.children}
    </main>
  </>);
};

export default Frame;
