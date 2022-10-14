import Head from "next/head";
import Banner from "../components/BannerComponent/Banner";
import Card from "../components/CardComponent/Card";

import cardData from "../data/coffee-stores.json";
import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  const data = cardData;
  return {
    props: {
      data,
    },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("banner btn clicked");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee, coffee, coffeeee...</title>
        <meta name="description" content="A website for coffee lovers" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View nearby stores"
          handleOnClick={handleOnBannerBtnClick}
        />

        <div className={`${styles.cardLayout} ${styles.sectionWrapper}`}>
          {props.data.map((card) => {
            console.log(card.id, card.name, card.imgUrl);
            return (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                imgUrl={card.imgUrl}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
