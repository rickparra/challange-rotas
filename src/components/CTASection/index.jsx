import PropTypes from 'prop-types';
import styles from './CTASection.module.scss';

export default function CtaSection({ title, text }) {
  return (
    <section className={styles.CTASection}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

CtaSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
