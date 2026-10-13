import { A } from "@solidjs/router";

import Icon from "../icon";
import styles from "./index.module.css";

export const Header = () => {
  return <header class={styles.header}>
    <A href="/" class={styles.toplink}>
      <Icon class={styles.icon} />
      Yukkku.dev
    </A>
  </header>
};

export default Header;
