import styles from "./Title.module.scss";

type Props = {
  children: string;
};

const Title = ({ children }: Props): JSX.Element => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
