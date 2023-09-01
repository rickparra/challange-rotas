import PropTypes from 'prop-types'; // Importe a biblioteca PropTypes
// eslint-disable-next-line no-unused-vars
import styles from './GroupList.module.css'

export default function GroupList({ groups, handleGroupClick }) {
  return (
    <div>
      <h2>Grupos</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index} onClick={() => handleGroupClick(index)}>
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Valide as props utilizando PropTypes
GroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
      // Outras propriedades do objeto 'group' podem ser definidas aqui
    })
  ).isRequired,
  handleGroupClick: PropTypes.func.isRequired
};
