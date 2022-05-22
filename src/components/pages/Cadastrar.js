import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Cadastrar.module.css";
function Cadastrar() {
  return (
    <div>
      <Navbar></Navbar>
      <form className={styles.form}>
        <img
          src="/assets/img/logo.png"
          height="120px"
          width="120px"
          alt="imagem logo"
        />
        <div className={styles.formTitle}>
          <h1>Faça seu Cadastro</h1>
        </div>
        <input
          type="text"
          placeholder="Digite seu Nome completo"
          className={styles.login}
        />
        <input
          type="email"
          placeholder="Digite seu E-mail"
          className={styles.email}
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          className={styles.senha}
        />
        <input
          type="password"
          placeholder="Confirme sua Senha"
          className={styles.senha}
        />
        <input
          type="text"
          placeholder="Escolha um Apelido"
          className={styles.apelido}
        />
        <input
          type="text"
          placeholder="Digite seu Login"
          className={styles.login}
        />
        <div className={styles.button}>
          <button type="submit">Entrar</button>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default Cadastrar;
