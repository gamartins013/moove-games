import Footer from "./Footer";
import styles from "./Login.module.css";
import Navbar from "./Navbar";
function Login() {
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
          <h1>Faça seu Login</h1>
        </div>
        <input
          type="text"
          placeholder="Digite seu Login"
          className={styles.login}
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          className={styles.senha}
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

export default Login;
