import { useState } from 'react';
import styles from './Feed.module.css';
import MapContent from '../../components/MapComponent';

export default function Feed() {
  const [denuncias, setDenuncias] = useState([]);
  const [denunciaSelecionada, setDenunciaSelecionada] = useState(null);
  const [isDragBarActive, setIsDragBarActive] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [updateKey, setUpdateKey] = useState(0); // Estado para forçar a atualização
  const [descricao, setDescricao] = useState('');

  const handleClick = () => {
    localStorage.clear();
    // Alternar a chave de atualização para forçar a atualização do componente
    setUpdateKey(prevKey => prevKey + 1);
  };

  const handleDragBarClick = () => {
    setIsDragBarActive(!isDragBarActive);
  };

  const handleCreateDenuncia = (novaDenuncia) => {
    setDenuncias([...denuncias, novaDenuncia]);
    setTitulo('');
    setDescricao('');
  };

  return (
    <div key={updateKey} className={styles.feedContent}> {/* Chave de atualização aqui */}
      <div className={`${styles.left} ${isDragBarActive ? styles.ativo : ''}`}>
        <MapContent />
      </div>

      <div
        className={`${styles.dragBar} ${isDragBarActive ? styles.ativo : ''}`}
        onClick={handleDragBarClick}
      >
        <p>BARRA DO CHAT</p>
      </div>

      <div className={styles.right}>
        <div className={`${styles.feedContainer} ${isDragBarActive ? styles.ativo : ''}`}>
          <h1 className={styles.feedTitle}>Feed</h1>
          <button onClick={handleClick}>Sair da Conta</button>

          {/* Formulário para criar denúncias */}
          <h3>Criar Denúncia</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Título:</label>
              <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div>
              <label>Descrição:</label>
              <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>
            <button onClick={() => handleCreateDenuncia({ titulo, descricao })}>
              Enviar Denúncia
            </button>
          </form>

          {/* Lista de denúncias */}
          <div className={styles.denunciasList}>
            {denuncias.map((denuncia, index) => (
              <div key={index} className={styles.denunciaItem}>
                <h3 onClick={() => setDenunciaSelecionada(denuncia)}>{denuncia.titulo}</h3>
                {denunciaSelecionada === denuncia && (
                  <div className={styles.denunciaDetalhes}>
                    <p>{denuncia.descricao}</p>
                    {/* Adicione mais informações da denúncia aqui */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
