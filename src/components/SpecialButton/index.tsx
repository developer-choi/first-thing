import styles from './index.module.scss';

export interface SpecialButtonProps {
  text: string;
}

export default function SpecialButton({text}: SpecialButtonProps) {
  return (
    <button className={styles.special}>{text}</button>
  );
}
