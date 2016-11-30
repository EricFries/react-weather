var React = require('react');
var PropTypes = React.PropTypes;

function ForecastDetails (props){
  return (
    <div>
      <p>{props.city}</p>
      <p>min temp: {props.minTemp}</p>
      <p>max temp: {props.maxTemp}</p>
    </div>
  )
}

module.exports = ForecastDetails;
