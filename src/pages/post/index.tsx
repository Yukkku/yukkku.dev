import { createResource, Show } from "solid-js";
import { useParams } from "@solidjs/router";

import Frame from "../../components/frame";

export const Post = () => {
  const params = useParams<{ slug: string }>();
  const slug = () => params.slug;
  const [content] = createResource(slug, slug => import(`../../posts/${slug}.tsx`));
  return (<Frame title={content()?.info.title}>
    <Show when={content()}>
      {content().Content()}
    </Show>
  </Frame>);
};

export default Post;
