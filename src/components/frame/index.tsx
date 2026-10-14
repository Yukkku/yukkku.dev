import type { JSX } from "solid-js";
import { Title } from "@solidjs/meta";

import Header from "../../components/header";
import styles from "./index.module.css";

export const Post = (props: { children?: JSX.Element, title?: string }) => {
  return (<>
    <Title>{props.title ? `${props.title} | Yukkku.dev` : "Yukkku.dev"}</Title>
    <Header />
    <main class={styles.main}>
      {props.children}
    </main>
  </>);
};

export default Post;

