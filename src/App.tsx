import styles from "./App.module.css";

const LinkEntry = (props: { service: string, account: string, link: string }) => {
  return <tr>
    <th class={styles.service}>{props.service}</th>
    <td class={styles.account}><a href={props.link}>{props.account}</a></td>
  </tr>;
};

export const App = () => {
  return (<>
    <header class={styles.header}>
      <svg class={styles.icon} viewBox="-20 -20 40 40">
        <path d="M0,-20L10,-10V10L2,18V-2L9,-9V9L-9,-9L0,-18V20L-10,10V-10Z" style={{
          fill: "var(--fg)",
          "fill-rule": "evenodd",
          transform: "scaleX(sqrt(3))"
        }} />
      </svg>
      <span class={styles.name}>Yukkku</span>
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

export default App;
