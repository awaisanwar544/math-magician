import PropTypes from 'prop-types';
import './CalcKey.css';

const CalcKey = ({ category, keyValue, onClick }) => (
  <input
    data-testid="calc-key"
    className={`calc-btn ${category}`}
    value={keyValue}
    type="button"
    onClick={onClick}
  />
);

CalcKey.propTypes = {
  category: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalcKey;
