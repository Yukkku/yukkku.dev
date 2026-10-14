import Section from "../components/section";

export const info = {
  title: "JOI2024参加記",
  shared: "2024-02-06",
  updated: "2026-10-15",
};

export const Content = () => {
  return <Section heading="JOI2024参加記">
    <p>参加記を書けと言われた気がしたので書きます</p>
    <Section heading="1日目">
      <p>楽しかったです (あとでちゃんと書き足します)</p>
    </Section>
    <Section heading="2日目">
      <p>前日は結局ABC以外でコードを書いてない気がします. ずっとグダグダしてました</p>
      <p>当日はちゃんと頑張って 100 - 100 - 62 - 70 - 0 でした</p>
      <Section heading="1問目: 室温">
        <p>最初の方はずっと総和と勘違いしていました(それで入出力例の1と2があってしまうのが恐ろしい)</p>
        <p>誤読のせいで40分くらいかかりました</p>
      </Section>
      <Section heading="2問目: 建設事業 2">
        <p>問題を見て「あーはいはいダイクストラね」だったのでそのまま実装しました</p>
        <p>1問目の誤読で焦って<code>make_heap</code>が最大値を吐くことを忘れて実装ミスでTLEしました</p>
      </Section>
      <Section heading="3問目: マラソン大会 2">
        <p>「ゴールの周りをぐるぐる回りそうだな」という直感でゴールの方から埋める区間dpを作りました</p>
        <p>ゴールから埋めるって考えを捨てきれなかったのが敗因です</p>
      </Section>
      <Section heading="4問目: プレゼント交換">
        <p>小課題4をとりあえずやったら区間だなって気づきました. その発見を基に小課題7まで通して考えてましたが無理でした</p>
        <p>この問題で70点だったの自分だけらしいです</p>
      </Section>
      <Section heading="5問目: 道路網の整備 2">
        <p>問題を見てすらいません. 簡単な小課題がいくつかあるので見ていればもう数十点あったのかなと</p>
        <p>まさかダブリングに天才という修飾を付ける日が来るとは思いませんでした</p>
      </Section>
    </Section>
  </Section>;
};
