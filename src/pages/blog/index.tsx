import { createResource, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { Dynamic } from "solid-js/web";

import Icon from "../../components/icon";
import styles from "./index.module.css";

export const Blog = () => {
  const params = useParams<{ slug: string }>();
  const slug = () => params.slug;
  const [content] = createResource(slug, slug => import(`../../blog/${slug}.tsx`));

  return (<>
    <header class={styles.header}>
      <Icon class={styles.icon} />
      Yukkku.dev
    </header>
    <main class={styles.main}>
      <Show when={content()}>
        <Dynamic component={content().Content} />
      </Show>
    </main>
  </>);
};

export default Blog;
