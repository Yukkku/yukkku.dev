import type { JSX } from "solid-js";

import styles from "./index.module.css";

export const Section = (props: { heading: JSX.Element, children?: JSX.Element }) => {
  return <div class={styles.section}>
    <div class={styles.heading}>{props.heading}</div>
    <div class={styles.content}>
      {props.children}
    </div>
  </div>;
};

export default Section;
