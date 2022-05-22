import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <section className={styles.section}>
          <div className={styles.title}>
            <h1>OLHA AQUELE AÇAIZAO VEI</h1>
            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </text>
          </div>
          <img
            src="./assets/img/home_bg_character_main.png"
            alt="bg_main"
            height="500px"
          ></img>
        </section>
        <section className={styles.bodySection}>
          <div className={styles.box2}>
            <img src="https://dummyimage.com/230x230/000/fff"></img>
            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </text>
            <div className={styles.button}>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="https://dummyimage.com/230x230/000/fff"></img>
            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </text>
            <div className={styles.button}>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
          <div className={styles.box}>
            <img src="https://dummyimage.com/230x230/000/fff"></img>
            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </text>
            <div className={styles.button}>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
