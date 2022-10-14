import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Coffee <span>machaaa</span>
      </h1>
      <p className={styles.subTitle}>Discover local coffee shops macha</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Banner;
