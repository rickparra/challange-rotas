import styles from "./Block.module.css"
import PropTypes from 'prop-types'; 

export default function Block({title, text}) {
    return (
      <div className={styles.block}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }

  Block.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired  
  }