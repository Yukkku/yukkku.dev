import { Title } from "@solidjs/meta";

import Header from "../../components/header";
import styles from "./index.module.css";

export const NotFound = () => {
  return (<>
    <Title>404 | Yukkku.dev</Title>
    <Header />
    <main class={styles.main}>
      <div class={styles.number}>404</div>
      <p class={styles.comment}>って番号書いてみたはいいものの, このページの実際のステータスコードは200なんですよね</p>
    </main>
  </>);
};

export default NotFound;
