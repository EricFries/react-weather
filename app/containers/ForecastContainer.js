var React = require('react');
var Search = require('../components/Search');
var ForecastWrapper= require('../components/ForecastWrapper');
var Forecast = require('../components/Forecast');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var ForecastContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState: function (){
    return {
      isLoading: true,
      fiveDayForecast: [],
      city: {},
    }
  },

  componentDidMount: function() {
    var searchTerm = this.props.routeParams.city;

    openWeatherHelpers.getFiveDayForecast(searchTerm)
    .then(function(response){
      this.setState({
        isLoading: false,
        fiveDayForecast: response.data.list,
        city: response.data.city.name,
      });
    }.bind(this))
  },

  handleClickForecast: function (forecast) {
    this.context.router.push({
      pathname: '/detail/' + this.state.city,
      query: {
        date: forecast.dt,
        detailForecast: JSON.stringify(forecast.temp),
        description: forecast.weather[0].description,
      }
    });
  },

  renderForecasts: function() {
    return this.state.fiveDayForecast.map(function(forecast, index){
      return <Forecast
              forecast={forecast}
              date={forecast.dt}
              description={forecast.weather[0].description}
              key={index}
              onClickForecast={this.handleClickForecast}
              className="col-md-3"
            />
    }, this);
  },

  render: function() {
    return (
      this.state.isLoading === true
      ? <p>Loading</p>
      : <ForecastWrapper>
        {this.renderForecasts()}
        </ForecastWrapper>
    )
  },
});

module.exports = ForecastContainer;
