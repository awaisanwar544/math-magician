import PropTypes from 'prop-types';
import './Display.css';

const Display = (props) => {
  const { value } = props;
  return (
    <div className="display-container">
      <p className="value">{value}</p>
    </div>
  );
};

Display.defaultProps = { value: 0 };
Display.propTypes = { value: PropTypes.number };

export default Display;
