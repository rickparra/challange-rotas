import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importe a biblioteca PropTypes
import { Link, useLocation } from 'react-router-dom';
import styles from './menulink.module.css';

export default function MenuLink({ children, to, onClick }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      className={`${styles.link} ${isScrolled ? styles.scrolled : ''} ${location.pathname === to ? styles.linkDestacado : styles.linkNormal}`}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

// Valide as props utilizando PropTypes
MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func // Você pode ajustar isso de acordo com as necessidades
};
