import styles from './index.module.scss';
import type {ComponentPropsWithRef} from 'react';

export default function AnotherButton(props: ComponentPropsWithRef<'button'>) {
  return (
    <button className={styles.another} {...props}/>
  );
}
