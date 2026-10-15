import { createResource, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";

import Section from "../../components/section";
import styles from "./index.module.css";

export const Post = () => {
  const params = useParams<{ slug: string }>();
  const slug = () => params.slug;
  const [content] = createResource(slug, slug => import(`../../../posts/${slug}.tsx`));
  const title = () => content()?.info.title;
  return <>
    <Show when={content()}>
      <Title>{title()} | Yukkku.dev</Title>
      <Section heading={title()}>
        <div class={styles.info}>
          <div>Shared:{content().info.shared}</div>
          <div>Updated:{content().info.updated}</div>
          <div><a href={`https://github.com/Yukkku/yukkku.dev/blob/main/src/posts/${slug()}.tsx`}>Source</a></div>
        </div>
        {content().Content()}
      </Section>
    </Show>
  </>;
};

export default Post;
