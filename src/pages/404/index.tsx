import { Title } from "@solidjs/meta";

import styles from "./index.module.css";

export const NotFound = () => {
  return <>
    <Title>404 | Yukkku.dev</Title>
    <div class={styles.number}>404</div>
    <p class={styles.comment}>って番号書いてみたはいいものの, このページの実際のステータスコードは200なんですよね</p>
  </>;
};

export default NotFound;
