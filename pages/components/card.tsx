import { CardProps } from "../lib/mockCardData";

import styles from './card.module.scss';

export const Card = (props: CardProps) => {
  return (
    <span className={ styles.root } />
  )
}