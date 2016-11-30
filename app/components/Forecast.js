var React = require('react');
var PropTypes = React.PropTypes;
var formatEpochTime = require('../utils/formatEpochTime');

var Forecast= React.createClass({
  handleClick: function(e){
    if (this.props.onClickForecast){
      e.preventDefault();
      this.props.onClickForecast(this.props.forecast);
    }
  },

  getForecastDate: function() {
    return formatEpochTime(this.props.date)
  },

  render: function() {
    return (
      <div className={this.props.className} onClick={this.handleClick}>
          <h1>{this.props.description}</h1>
          <h4>{this.getForecastDate()}</h4>
      </div>
    )
  }
});

module.exports = Forecast;
