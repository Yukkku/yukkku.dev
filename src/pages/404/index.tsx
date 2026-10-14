import { Title } from "@solidjs/meta";

import Frame from "../../components/frame";
import styles from "./index.module.css";

export const NotFound = () => {
  return (<Frame title="404">
    <Title>404 | Yukkku.dev</Title>
    <div class={styles.number}>404</div>
    <p class={styles.comment}>って番号書いてみたはいいものの, このページの実際のステータスコードは200なんですよね</p>
  </Frame>);
};

export default NotFound;
