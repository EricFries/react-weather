var React = require('react');
var Search = require('../components/Search');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var ForecastContainer = React.createClass({

  getInitialState: function (){
    return {
      isLoading: true,
      fiveDayForecast: [],
      city: {},
    }
  },

  componentDidMount: function() {
    var searchTerm = this.props.routeParams.city;
    console.log(searchTerm);
    openWeatherHelpers.getFiveDayForecast(searchTerm)
    .then(function(response){
      console.log(response);
      this.setState({
        isLoading: false,
        fiveDayForecast: response.data.list,
        city: response.data.city,
      });
    }.bind(this))
  },

  render: function() {
    console.log(this.state.fiveDayForecast);
    return (
      this.state.isLoading === true
      ? <p>Loading</p>
      : <p>Display Forcast</p>
    )
  },
});

module.exports = ForecastContainer;
