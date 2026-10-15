import { Title } from "@solidjs/meta";

import Section from "../../components/section";
import Icon from "../../components/icon";
import styles from "./index.module.css";

export const Profile = () => {
  return <>
    <Title>Profile | Yukkku.dev</Title>
    <div class={styles.nameplate}>
      <Icon class={styles.icon} />
      <ruby>池本<rt>いけもと</rt></ruby> <ruby>悠生<rt>ゆう</rt></ruby>
    </div>
    <div class={styles.intro}>
      <p>私です. よくインターネット上でYukkkuと名乗っています. "Yukkku"の読み方は未定義ですが, みなさんからは「ゆっく」「ゆっっく」などと呼ばれています</p>
      <p>現在, 宇部工業高等専門学校の電気工学科4年で, 誕生日は2006-09-14です</p>
    </div>
    <Section heading="領域">
      <Section heading="プログラミング">
        <p>プログラミング歴{Math.floor((Date.now() - +new Date("2016-05-04")) / 86400000)}日です</p>
        <p>高専1年のときから競技プログラミングとかをはじめて, 現時点でAtCoderで黄色, 現役高専生の中で一番レートが高いっぽいです (私調べ)</p>
        <Section heading="Rust">
          <p>私がメインで使っている言語です. Vibe Codingの登場前から好んで使っていましたが, たまたまVibe Codingと相性が良いかんじだったので, 正直助かってます</p>
        </Section>
        <Section heading="JavaScript / TypeScript">
          <p>詳細な言語仕様まで大体理解しているつもりになっています. フロントエンド書くときや, 雑にスクリプトを書き殴りたいときに使っています</p>
          <p>このウェブサイトは私が<a href="https://bun.sh">Bun</a> + <a href="https://www.typescriptlang.org/">TypeScript</a> + <a href="https://vite.dev/">Vite</a> + <a href="https://www.solidjs.com/">SolidJS</a>で手書きしています. ソースコードは<a href="https://github.com/Yukkku/yukkku.dev">ここ</a>にあるよ!</p>
        </Section>
        <Section heading="C / C++">
          <p>プログラムの限界最適化をしたいときに使います. C++で情報オリンピックに出て春合宿まで行ったので, そこそこ書ける方って言っていいとは思います</p>
        </Section>
        <Section heading="Python">
          <p>勉強した記憶は無いですが, 書けはします. あまり好んで書きはしませんけども</p>
        </Section>
        <Section heading="Nix">
          <p>メインのPCをNixOSにしています. ぶっ壊してもすぐ元通りにできる環境が楽すぎて, 他のOSが使えなくなりました</p>
          <p>私のPCの設定は<a href="https://github.com/Yukkku/nix-config">GitHubに上げています</a>. <a href="https://wiki.nixos.org/wiki/Impermanence">impermanence</a>しているので気楽に色々壊せていいです</p>
        </Section>
        <Section heading="Typst">
          <p>レポートをTeXで書こうと思ってTeXをWSLに入れたらそのままWSLが壊れたのでTypstを勉強した, というのがきっかけです. 今ではレポートは全部Typstで書いてます</p>
        </Section>
        <Section heading="Scratch">
          <p>ビジュアルプログラミング言語として有名なScratchですが, そんなScratchの<a href="https://scratch.mit.edu/projects/1282348295/">限界を目指したり</a>, <a href="https://scratch.mit.edu/projects/1304220305/">"穴"を突いたり</a>, <a href="https://github.com/Yukkku/chaseratchp-desktop">改造したり</a>して遊んでいます</p>
        </Section>
        <p>この他にGo, Zig, Haskellあたりは基本的な文法や仕様は把握していますが, 実用する機会が無いので実務で通用する程度に書けるかは知りません</p>
      </Section>
      <Section heading="音楽">
        <p>色々したり, しなかったりしています. 絶対音感はかつてありましたが, 今は崩壊しています</p>
        <Section heading="Pf.">
          <p>よくピアノとかを弾いています. 始めたのが小学校入学前なので, 人生の2/3以上弾いていることになりますね</p>
          <p>あまり手が大きいほうでは無いので, 片手で10度の和音が弾けずに困っています</p>
        </Section>
        <Section heading="Trp.">
          <p>学校では吹奏楽部所属で, トランペットを吹いています. 残念ながらあまり上手では無い</p>
          <p>私物でBachの180ML37GBSPという型番の楽器を持っています</p>
        </Section>
        <Section heading="Ot.">
          <p>オタマトーンを買って, 改造して遊んでいました. なんか変な負荷をかけてしまったらしく, 今は壊れて音が鳴らなくなってしまいましたが</p>
        </Section>
        <Section heading="作曲">
          <p>自己満なので, 表に出せるものはあまり無いですが, 一応<a href="https://musescore.com/user/70915675">Musescore.comにいくつか作品を置いている</a>らしいですよ</p>
        </Section>
      </Section>
      <Section heading="数学">
        <p>数学基礎論や位相空間論などを中途半端に齧り, 賢い定義に唸るなどしています. イデアルって概念考えた人すごすぎ</p>
      </Section>
    </Section>
  </>;
};

export default Profile;
