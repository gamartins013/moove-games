import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from "./Jogos.module.css";
function Jogos() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.mainText}>
        <h1>Veja todos os os nossos jogos</h1>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div2}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div3}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div4}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div6}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div7}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div8}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div9}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div11}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div12}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div13}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
          <div className={styles.div14}>
            <img src="https://dummyimage.com/400x400/000/fff"></img>
          </div>
        </div>
      </div>
      <div className={styles.newButton}>
        <button type="submit">Voltar</button>
        <button type="submit">Próxima</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Jogos;
