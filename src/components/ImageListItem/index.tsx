import styles from "./styles.module.scss"

interface ItemProp {
  title: string;
  description: string;
}

function Item(props: ItemProp) {
  return (
    <li className={styles.container}>
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
    </li>
  );
}

export default Item;
