import PropTypes from 'prop-types';
import './CalcKey.css';

const CalcKey = (props) => {
  const { type, keyValue, onClick } = props;
  const classNames = `calc-btn ${type}`;
  return (
    <input
      className={classNames}
      value={keyValue}
      type="button"
      onClick={onClick}
    />
  );
};

CalcKey.propTypes = {
  type: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalcKey;
