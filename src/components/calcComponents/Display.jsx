import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => (
  <div className="display-container">
    <p className="value" id="display-value">{value}</p>
  </div>
);

Display.propTypes = { value: PropTypes.string.isRequired };

export default Display;
