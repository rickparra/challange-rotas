import styles from "./LoginLogout.module.css";
import { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";



export default function LoginLogout() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`${styles.container} ${isSignUpMode ? styles["sign-up-mode"] : ""}`}>
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          <form action="#" className={styles["sign-in-form"]}>
            <h2 className={styles.title}>Entrar</h2>
            <div className={styles["input-field"]}>
              <i className={`fas fa-user ${styles.icon}`}></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles["input-field"]}>
              <i className={`fas fa-lock ${styles.icon}`}></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Entrar" className={`${styles.btn} ${styles.solid}`} />
            <p className={styles["social-text"]}>Ou entre com plataformas sociais</p>
            <div className={styles["social-media"]}>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-facebook-f ${styles.icon}`}></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-twitter ${styles.icon}`}></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-google ${styles.icon}`}></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-linkedin-in ${styles.icon}`}></i>
              </a>
            </div>
          </form>
          <form action="#" className={styles["sign-up-form"]}>
            <h2 className={styles.title}>Cadastrar</h2>
            <div className={styles["input-field"]}>
              <i className={`fas fa-user ${styles.icon}`}></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles["input-field"]}>
              <i className={`fas fa-envelope ${styles.icon}`}></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles["input-field"]}>
              <i className={`fas fa-lock ${styles.icon}`}></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className={styles.btn} value="Cadastrar" />
            <p className={styles["social-text"]}>Ou entre com plataformas sociais</p>
            <div className={styles["social-media"]}>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-facebook-f ${styles.icon}`}></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-twitter ${styles.icon}`}></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-google ${styles.icon}`}></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className={`fab fa-linkedin-in ${styles.icon}`}></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className={styles["panels-container"]}>
        <div className={`${styles.panel} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>Novo por aqui?</h3>
            <p>
              Venha fazer parte da nossa comunidade!
            </p>
            <button className={`${styles.btn} ${styles.transparent}`} id={styles["sign-up-btn"]} onClick={handleSignUpClick}>
              Cadastrar
            </button>
          </div>
          <img src="" className={styles.image} alt="" />
        </div>
        <div className={`${styles.panel} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <h3>Já faz parte da nossa comunidade?</h3>
            <p>
              Entre pela sua conta!
            </p>
            <button className={`${styles.btn} ${styles.transparent}`} id={styles["sign-in-btn"]} onClick={handleSignInClick}>
              Entrar
            </button>
          </div>
          <img src="" className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
}
