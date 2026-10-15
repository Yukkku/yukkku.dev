import { For } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";

import Section from "../../components/section";
import info from "../../../posts";

export const Posts = () => {
  return <>
    <Title>Posts | Yukkku</Title>
    <Section heading="Posts">
      <ul>
        <For each={Object.entries(info).sort()}>{([slug, info]) => {
          return <li>{info.shared}: <A href={`/posts/${slug}`}>{info.title}</A></li>
        }}</For>
      </ul>
    </Section>
  </>;
};

export default Posts;
