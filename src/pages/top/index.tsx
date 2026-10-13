import { Title } from "@solidjs/meta";

import styles from "./index.module.css";
import Icon from "../../components/icon";

const LinkEntry = (props: { service: string, account: string, link: string }) => {
  return <tr>
    <th class={styles.service}>{props.service}</th>
    <td class={styles.account}><a href={props.link}>{props.account}</a></td>
  </tr>;
};

export const Top = () => {
  return (<>
    <Title>Yukkku.dev</Title>
    <header class={styles.header}>
      <Icon class={styles.icon} />
      <span class={styles.name}>Yukkku.dev</span>
    </header>
    <table class={styles.links}>
      <LinkEntry service="GitHub" account="@Yukkku" link="https://github.com/Yukkku" />
      <LinkEntry service="X" account="@Yuk3u" link="https://x.com/Yuk3u" />
      <LinkEntry service="AtCoder" account="Yukkku" link="https://atcoder.jp/users/Yukkku" />

      <LinkEntry service="Bluesky" account="@yukkku.bsky.social" link="https://bsky.app/profile/yukkku.bsky.social" />
      <LinkEntry service="Instagram" account="@Yukkku" link="https://www.instagram.com/yukkku.tr" />
      <LinkEntry service="Misskey.io" account="@Yukkku" link="https://misskey.io/@Yukkku" />
      <LinkEntry service="MuseScore.com" account="Yukkku" link="https://musescore.com/user/70915675" />
    </table>
  </>);
};

export default Top;
