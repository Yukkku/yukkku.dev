import Frame from "../../components/frame";
import Section from "../../components/section";
import Icon from "../../components/icon";
import styles from "./index.module.css";

export const Profile = () => {
  return (<Frame title="Profile">
    <div class={styles.nameplate}>
      <Icon class={styles.icon} />
      <ruby>池本<rt>いけもと</rt></ruby> <ruby>悠生<rt>ゆう</rt></ruby>
    </div>
    <p>私です. よくインターネット上でYukkkuと名乗っています. "Yukkku"の読み方は未定義ですが, みなさんからは「ゆっく」「ゆっっく」などと呼ばれています</p>
    <p>現在, 宇部工業高等専門学校の電気工学科4年で, 誕生日は2006-09-14です</p>
    <Section heading="領域">
      <Section heading="プログラミング">
        <p>プログラミング歴{Math.floor((Date.now() - +new Date("2016-05-04")) / 86400000)}日です</p>
        <p>高専1年のときから競技プログラミングとかをはじめて, 現時点でAtCoderで黄色, 現役高専生の中で一番レートが高いっぽいです (私調べ)</p>
        <Section heading="Rust">
          <p>私がメインで使っている言語です. Vibe Codingの登場前から好んで使っていましたが, たまたまVibe Codingと相性が良いかんじだったので, 正直助かってます</p>
        </Section>
        <Section heading="JavaScript / TypeScript">
          <p>詳細な言語仕様まで大体理解しているつもりになっています. フロントエンド書くときや, 雑にスクリプトを書き殴りたいときに使っています</p>
        </Section>
        <Section heading="C / C++">
          <p>プログラムの限界最適化をしたいときに使います. まぁ, C++で情報オリンピックに出て春合宿まで行ったので, そこそこ書ける方って言っていいんじゃないですか</p>
        </Section>
        <Section heading="Python">
          <p>あまり好きでは無いし, 勉強した記憶も無いですが, 書けはします. あまり好きでは無いですが</p>
        </Section>
        <Section heading="Nix">
          <p>メインのPCをNixOSにしています. ぶっ壊してもすぐ元通りにできる環境が楽すぎて, 他のOSが使えなくなりました</p>
        </Section>
        <Section heading="Scratch">
          <p>ビジュアルプログラミング言語として有名なScratchですが, そんなScratchの"穴"を突いたり, 改造したりして遊んでいます</p>
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
          <p>私物でBachの180ML37GBSPという型番の楽器を持っているらしいです</p>
        </Section>
        <Section heading="作曲">
          <p>自己満なので, 表に出せるものはあまり無い</p>
        </Section>
      </Section>
      <Section heading="数学">
        <p>趣味で数学を嗜む人たちから見たらできない方であると思われます</p>
        <p>数学基礎論や位相空間論などを中途半端に齧り, 賢い定義に唸るなどしています. イデアルって概念考えた人すごすぎ</p>
      </Section>
    </Section>
  </Frame >);
};

export default Profile;
