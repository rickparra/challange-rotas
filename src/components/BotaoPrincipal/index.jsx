import PropTypes from 'prop-types';
import styles from "./BotaoPrincipal.module.css";

function BotaoPrincipal({ children, tamanho }) {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>
      {children}
    </button>
  );
}

BotaoPrincipal.propTypes = {
  children: PropTypes.node.isRequired,
  tamanho: PropTypes.string.isRequired
};

export default BotaoPrincipal;
