import { Title } from "@solidjs/meta";

import Section from "../../components/section";

export const Apps = () => {
  return <>
    <Title>Apps | Yukkku.dev</Title>
    <Section heading="Apps">
      <p>私がこれまでに作ってきたものたち (のうち, ウェブ上で簡単に見ていけるもの) です</p>
      <Section heading={<a href="https://yukkku.github.io/unphoton">Unphoton</a>}>
        <p>量子論をテーマにしたゲーム</p>
        <p>量子コンピュータのシミュレータから手作りしました. 密度行列での表現を採用したのでゲームでは出てこないけど混合状態も扱えます</p>
        <p>環境によっては動かないらしいんですけど, 残念ながら手元で再現できていないので修正できていません</p>
      </Section>
      <Section heading={<a href="https://yukkku.github.io/miniuniva">宇宙箱庭A</a>}>
        <p>全天から23156個の星の情報を入れて星空を再現してみました. 画面長押しで宇宙空間を動き回れます</p>
        <p>TypeScript + Canvas APIでゴリゴリやっているので, 電池残量の減りがすごいかも. いつかWebGLとかでちゃんと作り直したい</p>
      </Section>
      <Section heading={<a href="https://yukkku.github.io/ming-tuner">ming-tuner</a>}>
        <p>スマホで使う用のチューナー. 吹奏楽部で普段遣いしてます. そのうちビジュアライズの方法変えるかも</p>
        <p>プロジェクト名の由来は英語版Wikiepediaでおまかせ表示したら「<a href="https://en.wikipedia.org/wiki/Ming_(disambiguation)">Ming (disambiguation)</a>」のページを引いたからです</p>
      </Section>
      <Section heading={<a href="https://yukkku.github.io/part-roulette">part-roulette</a>}>
        <p>部活で楽譜のパート分けの最終手段として使われるルーレット. 必ず止まるのが境界ギリギリのところになるなど, 無意味さを超越した演出を心がけた</p>
      </Section>
      <Section heading={<a href="https://yukkku.github.io/shiritori-app">shiritori-app</a>}>
        <p>インターンシップの選考課題として作りました. ちょっと見た目にこだわってみたものの, デザインなんも分からんので実際どうなのか分からん</p>
        <p>ちなみに選考は通って<a href="https://jigjp-diary2025.hatenablog.com">その会社にインターンシップに行きました</a>. 楽しかったですよ</p>
      </Section>
    </Section>
  </>;
};

export default Apps;
