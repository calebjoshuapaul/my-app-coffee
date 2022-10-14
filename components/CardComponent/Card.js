import cls from "classnames";
import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <Link href={`/coffee-store/${props.id}`}>
      <a className={styles.cardLink}>
        <div className={cls("glass", styles.cardContainer)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.imgUrl}
              width={260}
              height={160}
              alt={props.name}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
