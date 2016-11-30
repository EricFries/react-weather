var React = require('react');
var PropTypes = React.PropTypes;

function DetailForecastWrapper (props){
  return (
    <div className="text-center">
          {props.children}
    </div>
  )
}

module.exports = DetailForecastWrapper;
