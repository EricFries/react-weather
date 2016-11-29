var React = require('react');
var PropTypes = React.PropTypes;

// var Search = React.createClass({
//   render: function() {
//     return (
//       <form onSubmit={this.props.onSubmitCity} className="navbar-form navbar-left">
//         <div className="form-group">
//           <input type="text" className="form-control" placeholder="New York, NY" />
//         </div>
//         <button type="submit" className="btn btn-default">Get Weather</button>
//       </form>
//     )
//   },
// });

function Search (props){
  return (
    <form onSubmit={props.onSubmitCity} className="navbar-form navbar-left">
      <div className="form-group">
        <input value={props.city} onChange={props.onUpdateCity} type="text" className="form-control" placeholder="New York, NY" />
      </div>
      <button type="submit" className="btn btn-default">Get Weather</button>
    </form>
  )
}

Search.propTypes = {
    city: PropTypes.string.isRequired,
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
};

module.exports = Search;
