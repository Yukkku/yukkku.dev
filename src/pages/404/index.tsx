import { Title } from "@solidjs/meta";

import styles from "./index.module.css";

export const NotFound = () => {
  return (<>
    <Title>404 | Yukkku.dev</Title>
    <div class={styles.number}>404</div>
  </>);
};

export default NotFound;
