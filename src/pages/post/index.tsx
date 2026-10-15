import { createResource, Show } from "solid-js";
import { useParams } from "@solidjs/router";

import Frame from "../../components/frame";
import Section from "../../components/section";
import styles from "./index.module.css";

export const Post = () => {
  const params = useParams<{ slug: string }>();
  const slug = () => params.slug;
  const [content] = createResource(slug, slug => import(`../../../posts/${slug}.tsx`));
  const title = () => content()?.info.title;
  return <Frame title={title()}>
    <Show when={content()}>
      <Section heading={title()}>
        <div class={styles.info}>
          <div>Shared:{content().info.shared}</div>
          <div>Updated:{content().info.updated}</div>
          <div><a href={`https://github.com/Yukkku/yukkku.dev/blob/main/src/posts/${slug()}.tsx`}>Source</a></div>
        </div>
        {content().Content()}
      </Section>
    </Show>
  </Frame >;
};

export default Post;
