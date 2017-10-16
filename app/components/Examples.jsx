var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title text-center">Examples component</h1>
        <p>Here are few example location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, AM</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
