var React = require('react');
var PropTypes = React.PropTypes;

function ForecastWrapper (props){
  return (
    <div className="text-center">
          <h1>{props.city}</h1>
          <h4>Select a day</h4>
          <div className="row">
              {props.children}
          </div>
    </div>
  )
}

module.exports = ForecastWrapper;
