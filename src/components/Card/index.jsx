import PropTypes from 'prop-types'; // Importe a biblioteca PropTypes
// eslint-disable-next-line no-unused-vars
import styles from './Card.scss';

export default function Card({ title, imageUrl, body }) {
    return (
      <div className="card-container">
  
        <div className="image-container">
          <img src={imageUrl} alt="" />  
        </div>
  
        <div className="card-content">
  
          <div className="card-title">
            <h3>{title}</h3>
          </div>
  
          <div className="card-body">
            <p>{body}</p>
          </div>
  
        </div>
  
      </div>
    );
}

// Valide as props utilizando PropTypes
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
