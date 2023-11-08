import styles from "./about.module.scss";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import LinhaDivisora from "../../components/LinhaDivisora"
import Block from "../../components/Block";
import CtaSection from "../../components/CTASection";

export default function About() {
    return (
        <>
            <div className={styles.top_site}>
                <div className={styles.title}>
                    <div className={styles.leftTitle}>
                        <h1>Trazendo segurança</h1>
                    </div>
                    <div className={styles.rightTitle}>
                        <h1>para seu dia a dia</h1>
                    </div>
                </div>

                <div className={styles.sub_title}>
                    <h3>
                        A UrbanShield é desenvolvida pelos estudantes da FIAP, visa solucionar a segurança, principal obstáculo para transformar São Paulo em uma smart city.
                    </h3>
                </div>

                <BotaoPrincipal tamanho="nm">Junte-se a nós</BotaoPrincipal>

            </div>

            <LinhaDivisora />

            <div className={styles.nossasIdeias}>
                <div className={styles.esquerda}>
                    <h2>Nosso Propósito</h2>
                </div>

                <div className={styles.direita}>
                    <h1>
                        Nosso propósito é criar um impacto positivo e duradouro na vida das pessoas. Com dedicação e inovação, buscamos superar expectativas, promovendo mudanças significativas para um futuro melhor.
                    </h1>

                    <div className={styles.blockContainer}>
                        <Block
                            title="Por que a segurança?"
                            text="A segurança desponta como um dos desafios globais mais prementes, e mantemos a firme convicção de que a tecnologia e a inovação pavimentam o caminho para atenuar a violência, remodelando as ruas de São Paulo em espaços onde a sensação de segurança é realidade."
                        />

                        <Block
                            title="Interdisciplinar"
                            text="UrbanShield é um grupo formado por estudantes, pesquisadores, engenheiros e líderes, trazendo uma variedade de experiências que enriquecem nossa cultura."
                        />

                        <Block
                            title="Nossa Abordagem"
                            text="Nossa abordagem é baseada na coleta de dados em tempo real por meio de totens equipados com sensores em toda a cidade de São Paulo. Esses dados são processados por nossa inteligência artificial, que classifica a segurança dos locais. Além disso, estamos trabalhando para integrar nosso aplicativo com sistemas de GPS populares, como o Maps e o Waze, para tornar as rotas mais seguras."
                        />

                        <Block
                            title="Comunidade Segura"
                            text="Promovemos a criação de comunidades seguras, permitindo que os usuários criem grupos de chat temporários para compartilhar suas localizações e viajar juntos com tranquilidade."
                        />
                    </div>
                </div>
            </div>

            <LinhaDivisora />

            <div className={styles.nossasIdeias}>
                <div className={styles.esquerda}>
                    <h2>Nossa Equipe</h2>
                </div>

                <div className={styles.direita}>
                    <h1>
                        Compostos por estudantes, pesquisadores, engenheiros e líderes, somos uma equipe que reúne habilidades em diversas áreas. Trabalhamos em juntos para forjar um futuro melhor.
                    </h1>

                    <div className={styles.blockContainer}>
                        <Block
                            title="Pesquisa e Desenvolvimento"
                            text="Nossa equipe de pesquisa e desenvolvimento está comprometida em criar soluções inovadoras para melhorar a segurança urbana. Utilizamos tecnologia de ponta para coletar e analisar dados em tempo real."
                        />

                        <Block
                            title="Políticas de Segurança"
                            text="Nosso compromisso com políticas de segurança rigorosas garante que os dados dos usuários sejam protegidos e mantidos com o mais alto padrão de confidencialidade."
                        />

                        <Block
                            title="Produto e Inovação"
                            text="Estamos constantemente aprimorando nosso produto para atender às necessidades em constante evolução de nossos usuários. A inovação está no cerne do que fazemos."
                        />

                        <Block
                            title="Operações Eficientes"
                            text="Nossas operações são executadas com eficiência para garantir que o UrbanShield seja uma plataforma confiável e funcional para todos os nossos usuários."
                        />
                    </div>
                </div>
            </div>

            <LinhaDivisora />

            <div className={styles.nossasIdeias}>
                <div className={styles.esquerda}>
                    <h2>Nossos Valores</h2>
                </div>

                <div className={styles.direita}>
                    <div className={styles.blockContainer}>
                        <Block
                            title="Integridade"
                            text="A integridade é o alicerce dos nossos valores. Comprometemo-nos a agir com honestidade, transparência e ética em todas as nossas ações."
                        />

                        <Block
                            title="Inovação"
                            text="Valorizamos a inovação como meio para impulsionar a mudança positiva. Buscamos constantemente maneiras criativas de abordar os desafios de segurança urbana."
                        />

                        <Block
                            title="Colaboração"
                            text="Acreditamos no poder da colaboração. Trabalhamos em conjunto com parceiros e a comunidade para alcançar nossos objetivos comuns."
                        />

                        <Block
                            title="Empoderamento"
                            text="Empoderamos nossos usuários fornecendo-lhes as ferramentas e informações necessárias para tomar decisões informadas sobre sua segurança."
                        />
                    </div>
                </div>
            </div>

            <CtaSection
                title="Venha fazer parte do presente"
                text="Crie sua conta e participe da nossa comunidade."
            />

        </>
    );
}
