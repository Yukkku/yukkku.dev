import { createResource, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";

import Section from "../../components/section";
import posts, { type Info } from "../../../posts";
import NotFound from "../404";
import styles from "./index.module.css";

export const Post = () => {
  const params = useParams<{ slug: string }>();
  const slug = () => params.slug;
  const post = (): Info | undefined => {
    const t = slug();
    if (Object.hasOwn(posts, t)) return posts[t as keyof typeof posts];
  }
  const [content] = createResource(post, post => {
    return post?.load();
  });
  return <>
    <Show when={!post()}>
      <NotFound />
    </Show>
    <Show when={post()}>
      <Title>{post()?.title} | Yukkku.dev</Title>
      <Section heading={post()?.title}>
        <div class={styles.info}>
          <div>Shared:{post()?.shared}</div>
          <div>Updated:{post()?.updated}</div>
          <div><a href={`https://github.com/Yukkku/yukkku.dev/blob/main/posts/${slug()}/index.tsx`}>Source</a></div>
        </div>
        <Show when={content.state === "errored"}>
          <div class={styles.error}>Error</div>
        </Show>
        <Show when={content.state === "unresolved" || content.state === "pending"}>
          <div class={styles.loading}>Loading...</div>
        </Show>
        <Show when={content.state === "ready" || content.state === "refreshing"}>
          {content()?.default()}
        </Show>
      </Section>
    </Show>
  </>;
};

export default Post;
