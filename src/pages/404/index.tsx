import { Title } from "@solidjs/meta";

import Header from "../../components/header";
import styles from "./index.module.css";

export const NotFound = () => {
  return (<>
    <Title>404 | Yukkku.dev</Title>
    <Header />
    <main class={styles.main}>
      404
    </main>
  </>);
};

export default NotFound;
