import Section from "../components/section";

export const info = {
  title: "テスト記事",
};

export const Content = () => {
  return <Section heading="テスト記事">
    <p>Hoge</p>
    <Section heading="ネスト">
      <p>Fuga</p>
    </Section>
    <p>Piyo</p>
    <Section heading="ネスト1">
      <Section heading="ネスト2">
        <Section heading="ネスト3">
          <Section heading="ネスト4">
            <Section heading="ネスト5">
              <Section heading="ネスト6">
                <Section heading="ネスト7">
                  <Section heading="ネスト8">
                    <p>こういう感じでどうですか?</p>
                    <p>見出しフォントサイズは<code>1rem</code>に収束します</p>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  </Section>;
};
