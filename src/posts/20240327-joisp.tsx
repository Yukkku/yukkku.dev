import Section from "../components/section";

export const info = {
  title: "JOI2024 春参加記",
  shared: "2024-03-27",
  updated: "2026-10-15",
};

export const Content = () => {
  return <>
    <p>うわぁ</p>
    <p><mark>Warning: 問題のネタバレを含みます</mark></p>
    <p>自分へ: 期間中のTwitterの動きも参照すると良いです</p>
    <Section heading="1日目">
      <p>朝5時起きして飛行機に乗りました. 離陸した瞬間は「かがくのちからってすげー!」って思いましたね</p>
      <p>表彰式は奨励賞で出てき忘れてすみませんでした. 後の交流会でもやらかしかけました</p>
      <p>プラクティスはTLEするA+B problemsや<code>N&lt;=1000</code>で<code>O(N^3)</code>をする問題があったりして怖かったです</p>
    </Section>
    <Section heading="2日目">
      <Section heading="fish3">
        <p>差分を取って, それをDで割って切り捨てて, それを累積和するとD=1の問題に帰着できます</p>
        <p>だから小課題3が解ければいいんですけど, 典型力がなくて解けませんでした</p>
      </Section>
      <Section heading="spy3">
        <p><code>Q&lt;=16</code>を見落としていて愚直点しか貰えませんでした</p>
      </Section>
      <Section heading="ski2">
        <blockquote>また, 各地点には未使用の接続設備が1つずつ用意されている.</blockquote>
        <p>これ見落として0点でした. カスすぎる</p>
      </Section>
      <p>しかし, 16 - 8 - 0 は酷すぎませんかねぇ</p>
      <p>夕食の牛めしが上げ底がほぼ0でびっくりしました. コンビニで感覚を狂わされていた</p>
    </Section>
    <Section heading="3日目">
      <Section heading="boardgame">
        <p>二次予選の拡張ダイクストラのトラウマが...</p>
      </Section>
      <Section heading="tricolor">
        <p>58点解法の考察ができていたのに, とれなかった. De Bruijn 数列を埋め込むわけですがそれは完璧にできていて, 2文字で1bit割り当てていたので奇数文字のときに埋める必要があったんですが, それがバグっていたわけですよねぇ</p>
        <p>もう1文字変えれば61点にもなる</p>
      </Section>
      <Section heading="vegetables5">
        <p>考察する時間が取れなかったから愚直を書いたら30点もらえてびっくり</p>
      </Section>
      <p>未だにtricolorが取れなかったのを引きずってます</p>
    </Section>
    <Section heading="4日目">
      <Section heading="collection">
        <p>愚直が書けなかった</p>
      </Section>
      <Section heading="joutour">
        <p>全方位木DPだなって思って書けなかった</p>
      </Section>
      <Section heading="tower">
        <p>「到達可能な区間」はAを使う回数の最小値が<code>(X + p) % D + q</code>になることを示し, それを書いて満点のはずなのに, 未だにどこでバグってるのか分からない</p>
        <p>嘘解法だったのかなぁ</p>
      </Section>
      <p>towerで満点行けるって思って他の問題捨てて, 結局とれない. 何なんでしょうかね</p>
      <p>夜は宿泊勢でイライラ棒で忙しい(?)PCTさんを除いてトランプで遊びました. 大富豪のルールを勉強しました</p>
    </Section>
    <Section heading="5日目">
      <Section heading="island">
        <p>唯一の満点.</p>
        <p>1番近い頂点の番号が0なら絶対0に繋がっているので, 0に結ぶ. というのを順番にやっていきます. UnionFindを使って既に同じ連結成分にあるならもう辺はない, とかしてクエリのキャッシュもとったりするとL=2Nで通ります</p>
      </Section>
      <Section heading="tabletennis">
        <p>簡単そうに見えるじゃん. 見えるじゃん</p>
        <p>結局自明点しか取れませんでした</p>
      </Section>
      <Section heading="escape2">
        <p>愚直で<code>vector</code>のコピーコンストラクタが実行時エラーを吐いたので, C++が嫌いです</p>
      </Section>
      <p>昼食の「いろいろ弁当」ってネーミング好きです</p>
    </Section>
    <Section heading="まとめ">
      <p>東京にいる間1度も土を踏んでいません</p>
      <p>現場からは以上です</p>
    </Section>
  </>;
};
