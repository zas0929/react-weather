var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title text-center">About</h1>
        <p>This is weather application</p>
        <p>Here some of the tools: </p>
        <ul>
          <li>React</li>
          <li>
            <a href="https://openweathermap.org">openWeatherMap</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
