import { useState } from 'react';
import styles from './Feed.module.css';
import MapContainer_ from '../../components/MapContent_';
import DenunciaForm from '../../components/DenunciaForm';

export default function Feed() {
  const [isDragBarActive, setIsDragBarActive] = useState(false);
  const [denuncias, setDenuncias] = useState([]); // Estado para armazenar as denúncias
  const [dragBarText, setDragBarText] = useState('Denuncias'); // Estado para o texto do dragBar


  const handleClick = () => {
    localStorage.clear();
  };

  const handleDragBarClick = () => {
    setIsDragBarActive(!isDragBarActive);
    // Atualize o texto com base no estado do dragBar
    setDragBarText(isDragBarActive ? 'Denúncias' : 'Mapa');
  };

  // Função para adicionar uma nova denúncia ao estado
  const handleDenunciaSubmit = (novaDenuncia) => {
    setDenuncias([...denuncias, novaDenuncia]);
  };

  return (
    <div className={styles.feedContent}>
      <div className={`${styles.left} ${isDragBarActive ? styles.ativo : ''}`}>
        <MapContainer_ denuncias={denuncias} />
      </div>

      <div
        className={`${styles.dragBar} ${isDragBarActive ? styles.ativo : ''}`}
        onClick={handleDragBarClick}
      >
        <p>{dragBarText}</p>
      </div>

      <div className={styles.right}>
        <div className={`${styles.feedContainer} ${isDragBarActive ? styles.ativo : ''}`}>
          <h1 className={styles.feedTitle}>Feed</h1>
          <button onClick={handleClick} className={styles.sairButton}>sair da conta</button>

          {/* Formulário para criar denúncias */}
          <DenunciaForm onDenunciaSubmit={handleDenunciaSubmit} />
          {/* Formulário para criar denúncias */}
        </div>
      </div>
    </div>
  );
}
