import PropTypes from 'prop-types'; // Importe a biblioteca PropTypes
import styles from './ChatScreen.module.css';

export default function ChatScreen({ currentGroup, handleBackToGroups }) {
    return (
      <div className={styles.chatScreenContainer}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={handleBackToGroups}>
            Voltar para Grupos
          </button>
          <h2>Grupo: {currentGroup.name}</h2>
        </div>
        <div className={styles.messages}>
          {/* Renderize as mensagens aqui */}
        </div>
        <div className={styles.inputArea}>
          {/* Adicione a área de entrada de mensagens aqui */}
        </div>
      </div>
    );
}

// Valide as props utilizando PropTypes
ChatScreen.propTypes = {
  currentGroup: PropTypes.shape({
    name: PropTypes.string.isRequired
    // Outras propriedades do objeto 'currentGroup' podem ser definidas aqui
  }).isRequired,
  handleBackToGroups: PropTypes.func.isRequired
};

