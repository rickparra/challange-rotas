import styles from "./error.module.scss"
import erro_404 from "../../assets/erro_404.png"
import BotaoPrincipal from "../../components/BotaoPrincipal"
import { useNavigate } from "react-router-dom"
//Página padrão de erro

export default function Error() {
    const navegar = useNavigate();


    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza que é isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte a página inicial.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro_404}
                    alt="cachorro"
                />
            </div>

            <div className={styles.espacoEmBranco}></div>
        </>
    )
}