import React from 'react';
import PropTypes from 'prop-types';

const FormatMoney = ({
  valueChange,
  formatMoney,
  value,
  formatted,
}) => (
  <div className="App">
    <input id="prevValue" onChange={(e) => valueChange(e)} value={value} />
    <button id="submitBtn" onClick={formatMoney}>Submit</button>
    <h4 id="formattedValue">Formatted output: {formatted}</h4>
  </div>
)

FormatMoney.propTypes = {
  valueChange: PropTypes.func.isRequired,
  formatMoney: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  formatted: PropTypes.string.isRequired,
}

export default FormatMoney;