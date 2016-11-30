var React = require('react');
var Forecast = require('../components/Forecast');
var ForecastDetails = require('../components/ForecastDetails');
var DetailForecastWrapper = require('../components/DetailForecastWrapper');

var DetailForecastContainer = React.createClass({
  getInitialState: function () {
    var query = this.props.location.query;
    var city = this.props.params.city;

    return{
      city: city,
      date: query.date,
      description: query.description,
      detailForecast: JSON.parse(query.detailForecast),
    };
  },

  render: function() {
    return (
      <DetailForecastWrapper>
        <Forecast
          date={this.state.date}
          description={this.state.description}
          className='col-sm-12'
        />
        <ForecastDetails
          city={this.state.city}
          minTemp={this.state.detailForecast.min}
          maxTemp={this.state.detailForecast.max}
        />
      </DetailForecastWrapper>
    )
  },
});

module.exports = DetailForecastContainer;
