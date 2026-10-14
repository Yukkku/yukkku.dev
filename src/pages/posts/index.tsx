import { For } from "solid-js";
import { A } from "@solidjs/router";

import Frame from "../../components/frame";
import Section from "../../components/section";

const info: {
  [K: string]: {
    title: string,
    shared: string,
    updated: string,
  }
} = import.meta.glob("../../posts/*.tsx", { import: 'info', eager: true });

export const Post = () => {
  return <Frame title="Posts">
    <Section heading="Posts">
      <ul>
        <For each={Object.entries(info).sort()}>{([key, info]) => {
          const slug = key.match(/\/([^\/]+)\.tsx/)![1];
          return <li>{info.shared}: <A href={`/posts/${slug}`}>{info.title}</A></li>
        }}</For>
      </ul>
    </Section>
  </Frame>;
};

export default Post;
