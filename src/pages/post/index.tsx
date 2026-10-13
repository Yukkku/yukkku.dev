import { createResource, Show } from "solid-js";
import { useParams, A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { Dynamic } from "solid-js/web";

import Icon from "../../components/icon";
import styles from "./index.module.css";

export const Post = () => {
  const params = useParams<{ slug: string }>();
  const slug = () => params.slug;
  const [content] = createResource(slug, slug => import(`../../posts/${slug}.tsx`));

  return (<>
    <Title>{content()?.info.title ?? "Loading..."} | Yukkku</Title>
    <header class={styles.header}>
      <A href="/" class={styles.toplink}>
        <Icon class={styles.icon} />
        Yukkku.dev
      </A>
    </header>
    <main class={styles.main}>
      <Show when={content()}>
        <Dynamic component={content().Content} />
      </Show>
    </main>
  </>);
};

export default Post;
