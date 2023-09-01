import styles from './home.css';
import VideoComponent from '../../components/VideoComponent/index';
import Card from '../../components/Card';
import Diagrama from '../../components/PlataformDiagram';
import Products from '../../components/Products';

export default function Home() {
    return (
        <div className={styles.inicioContainer}>
            <VideoComponent />

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
                    
            </div>

        </div>

        
    );
}
