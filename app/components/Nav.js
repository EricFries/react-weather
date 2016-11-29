var React = require('react');
var Link = require('react-router').Link;
var SearchContainer = require('../containers/SearchContainer')

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <Link to='/' className="navbar-brand">Weather App</Link>
        <SearchContainer />
      </nav>
    )
  },
});

module.exports = Nav;
