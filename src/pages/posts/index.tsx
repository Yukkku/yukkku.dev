import { For } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";

import Section from "../../components/section";

const info: {
  [K: string]: {
    title: string,
    shared: string,
    updated: string,
  }
} = import.meta.glob("../../../posts/*.tsx", { import: 'info', eager: true });

export const Posts = () => {
  return <>
    <Title>Posts | Yukkku</Title>
    <Section heading="Posts">
      <ul>
        <For each={Object.entries(info).sort()}>{([key, info]) => {
          const slug = key.match(/\/([^\/]+)\.tsx/)![1];
          return <li>{info.shared}: <A href={`/posts/${slug}`}>{info.title}</A></li>
        }}</For>
      </ul>
    </Section>
  </>;
};

export default Posts;
