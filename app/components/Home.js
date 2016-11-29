var React = require('react');
var SearchContainer = require('../containers/SearchContainer')

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Enter a City and State</h1>
          <SearchContainer />
      </div>
    )
  },
});

module.exports = Home;
