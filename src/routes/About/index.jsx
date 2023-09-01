import styles from "./about.module.css";
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

            <LinhaDivisora/>

            <div className={styles.nossasIdeias}>
                <div className={styles.esquerda}>
                    <h2>Nosso Propósito</h2>
                </div>

                <div className={styles.direita}>
                    <h1>
                    Nosso propósito é criar um impacto positivo e duradouro na vida das pessoas. Com dedicação e inovação, buscamos superar 
                    expectativas, promovendo mudanças significativas para um futuro melhor.
                    </h1>

                    <div className={styles.blockContainer}>
                            <Block
                            title="Por que a segurança?"
                            text="A segurança desponta como um dos desafios globais mais prementes, e mantemos a firme convicção de que a 
                            tecnologia e a inovação pavimentam o caminho para atenuar a violência, remodelando as ruas de São Paulo em 
                            espaços onde a sensação de segurança é realidade."
                            />

                            <Block
                            title="Interdiciplinar"
                            text="UrbanShield é um grupo formado por estudantes, pesquisadores, engenheiros e líderes, trazendo uma 
                            variedade de experiências que enriquecem nossa cultura." 
                            />

                            <Block
                            title="Safety is a Science"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem." 
                            />

                            <Block
                            title="Interdisciplinary"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />
                    </div>

                </div>
            </div>

            <LinhaDivisora/>

            <div className={styles.nossasIdeias}>
                <div className={styles.esquerda}>
                    <h2>Nossa Equipe</h2>
                </div>

                <div className={styles.direita}>
                    <h1>
                        Compostos por estudantes, pesquisadores, engenheiros e líderes, somos uma equipe que reúne habilidades 
                        em diversas áreas. Trabalhamos em uníssono para forjar um futuro promissor.
                    </h1>

                    <div className={styles.blockContainer}>
                            <Block
                            title="Research"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />

                            <Block
                            title="Políticas"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />

                            <Block
                            title="Product"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />

                            <Block
                            title="Operations"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />
                    </div>

                </div>
            </div>

            <LinhaDivisora/>

            <div className={styles.nossasIdeias}>
                <div className={styles.esquerda}>
                    <h2>Nossos Valores</h2>
                </div>

                <div className={styles.direita}>
                    
                    <div className={styles.blockContainer}>
                            <Block
                            title="Research"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />

                            <Block
                            title="Políticas"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />

                            <Block
                            title="Product"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
                            />

                            <Block
                            title="Operations"
                            text="Lorem ipsum dolor sit amet. Est mollitia repellendus qui corporis voluptatibus in magni 
                            voluptatem eos possimus iusto est delectus nihil. Est molestias facilis cum voluptatum voluptatem 
                            est voluptate beatae At molestiae commodi id molestiae voluptatem. Sit quia culpa sed voluptatem 
                            maiores aut possimus eaque est placeat repudiandae ex eligendi fuga aut error velit id velit internos. 
                            Rem ullam iusto vel Quis maxime eos reiciendis voluptas sed consectetur labore est inventore dicta." 
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
