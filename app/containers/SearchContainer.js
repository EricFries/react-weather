var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function (){
    return {
        city: ''
    }
  },

  handleSubmitCity: function(e){
    e.preventDefault();
    var city = this.state.city;
    this.setState({
      city: '',
    });
    this.context.router.push('forecast/' + this.state.city);
    console.log('search');
  },

  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value,
    })
  },

  render: function() {
    return (
      <Search
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
      />
    )
  },
});

module.exports = SearchContainer;
