import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './Products.css';

export default function Products({ products }) {
    return (
        <div className="products">

          {products.map(product => (
            <p key={product.id}>
              {product.name}
            </p>
          ))}

        </div>
    );
}

// Valide as props utilizando PropTypes
Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
