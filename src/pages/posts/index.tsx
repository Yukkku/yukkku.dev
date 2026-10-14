import { For } from "solid-js";
import { A } from "@solidjs/router";

import Frame from "../../components/frame";

const PostEntry = (props: { slug: string }) => {
  return <>{props.slug}</>;
};

const info: {
  [K: string]: {
    title: string,
  }
} = import.meta.glob("../../posts/*.tsx", { import: 'info', eager: true });

export const Post = () => {
  return <Frame title="Posts">
    <ul>
      <For each={Object.entries(info).sort()}>{([key, info]) => {
        const slug = key.match(/\/([^\/]+)\.tsx/)![1];
        return <li><A href={`/posts/${slug}`}>{info.title}</A></li>
      }}</For>
    </ul>
  </Frame>;
};

export default Post;
