import Icon from "../../components/icon";
import styles from "./index.module.css";

export const Top = () => {
  return (<>
    <header class={styles.header}>
      <Icon class={styles.icon} />
      Yukkku
    </header>
    <main>
      <h1>H1</h1>
      <p>paragraph</p>
      <p>paragraph</p>
      <h2>H2</h2>
      <p>paragraph</p>
      <h3>H3</h3>
      <p>paragraph</p>
      <h4>H4</h4>
      <p>paragraph</p>
      <h5>H5</h5>
      <p>paragraph</p>
      <p>paragraph</p>
    </main>
  </>);
};

export default Top;
