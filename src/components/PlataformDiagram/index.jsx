import PropTypes from 'prop-types'; // Importe PropTypes
// eslint-disable-next-line no-unused-vars
import styles from './PlataformDiagram.scss';

export default function Diagrama({ title, text }) {
    return (
      <div className="column">
        <h4>{title}</h4> 
        <p>{text}</p>
      </div>
    )
}

// Valide as props utilizando PropTypes
Diagrama.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};