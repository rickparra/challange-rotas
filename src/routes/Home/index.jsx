import styles from './home.css';
import VideoComponent from '../../components/VideoComponent/index';
import Card from '../../components/Card';
import Diagrama from '../../components/PlataformDiagram';
import Products from '../../components/Products';

export default function Home() {

    const imgAvenidaPaulista = 'paulista-cima.jpg'
    const imgTotem = 'toten-rua.webp'

    return (
        <div className={styles.inicioContainer}>
            <VideoComponent />

            <div className="contexto">
                <div className="tituloContexto">
                    <h1>São Paulo, a</h1>
                    <h1>nossa SmartCity</h1>
                </div>
                <div className="explica">
                    <p>
                        No coração da maior metrópole do Brasil, o UrbanShield está liderando uma revolução na segurança urbana. 
                        Com a visão de utilizar a tecnologia para enfrentar os desafios do ambiente urbano, nossos totens digitais estão 
                        estrategicamente posicionados em toda a cidade, coletando dados valiosos que são essenciais para tornar São Paulo 
                        um lugar mais seguro para todos.
                    </p>
                </div>
            </div>


            <div className="cardsContainer">

                <Card
                title="Botão de Pânico"
                imageUrl="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                body="testetestetestetestetestetestetes
                wfef4tt t45g45gijo"                
                />
                <Card
                title="Mapa de Riscos"
                imageUrl="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                body="testetestetestetestetestetestetes
                wfef4tt t45g45gijo"                
                />
                <Card
                title=" Alertas em Tempo Real"
                imageUrl="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                body="testetestetestetestetestetestetes
                 wfef4tt t45g45gijo"
                />

            </div>

            <div className="mid-site">         
                <h1>Onde a inovação encontra o impacto social.</h1>
            </div>

            <div className="tituloDiagrama">
                <h1>Sinta-se muito mais seguro</h1>
                <h1>com o UrbanShield</h1>
            </div>

            <div className="Diagrama-Alpha">

                <div className="ColunasDiagramas">
                    <Diagrama 
                    title="Coleta de Dados"
                    text="Totens com sensores capturam informações valiosas 24/7: movimento, luminosidade, ruídos, clima, etc."
                    />
                    <Products
                    products={[
                        {id: 1, name: 'Sensor de presença'},
                        {id: 2, name: 'Sensor de luminosidade'}, 
                        {id: 3, name: 'Sensor de som'},
                    ]} 
                    />
                </div>
                
                <div className="ColunasDiagramas">
                    <Diagrama
                    title="Inteligência de Dados"
                    text="Powerful algorithms analisam os dados dos sensores e classificam locais por segurança, gerando insights." 
                    />
                    <Products
                    products={[
                    {id: 1, name: 'Análise de risco'},
                    {id: 2, name: 'Mapa de calor'},
                    {id: 3, name: 'Padrões e correlações'}, 
                    ]}
                    />
                </div>

                <div className="ColunasDiagramas">
                    <Diagrama
                    title="Recursos ao Cidadão" 
                    text="O app integra os dados e disponibiliza recursos úteis para o dia a dia: rotas seguras, alertas, pânico, etc."
                    />
                    <Products
                    products={[
                        {id: 1, name: 'App GPS'},
                        {id: 2, name: 'Comunidades'},
                        {id: 3, name: 'Botão de pânico'},
                    ]} 
                    />
                </div>

            </div>

            <div className="mid-site-2">

            {/* Primeira Parte */}
            <div className="top-2">
                <div className="left">
                    <div className="tituloDiagrama">
                        <h1>Smart cities points</h1>
                        <h1>Nossos totens digitais</h1>
                    </div>

                    <div className="coment-container">
                        <p>
                            Nossos totens UrbanShield são os pilares da nossa missão de tornar São Paulo uma cidade mais segura e inteligente. Com a visão de utilizar a tecnologia para combater desafios urbanos, esses dispositivos inovadores estão espalhados estrategicamente por toda a cidade, coletando dados valiosos que são essenciais para a criação de comunidades mais seguras.
                        </p>

                        {/* Texto adicional, se necessário */}
                    </div>
                </div>

                <div className="container-paulista">
                    {/* Primeira imagem da Avenida Paulista */}
                    <img src={imgAvenidaPaulista} alt="Avenida Paulista" id='imgPaulista'/>
                </div>
            </div>

            {/* Segunda Parte */}
            <div className="top-2">
                <div className="left">
                    {/* Texto adicional, se necessário */}
                </div>
                
                <div className="container-paulista">
                    <img src={imgTotem} alt="Totem UrbanShield" id='imgTotem'/>
                </div>

                <div className="coment-container">
                    <p>
                        Em um mundo cada vez mais conectado, reconhecemos a importância de ter acesso a informações em tempo real. É por isso que os totens UrbanShield estão equipados com uma variedade de sensores avançados, que captam uma ampla gama de dados relevantes para a segurança urbana.
                    </p>

                    {/* Texto adicional, se necessário */}
                </div>
            </div>
        
            </div>

        </div>

        
    );
}
