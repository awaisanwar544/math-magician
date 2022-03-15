import PropTypes from 'prop-types';
import './CalcKey.css';

const CalcKey = (props) => {
  const { type, keyValue } = props;
  const classNames = `calc-btn ${type}`;
  return (
    <input className={classNames} value={keyValue} type="button" />
  );
};

CalcKey.propTypes = {
  type: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

export default CalcKey;
