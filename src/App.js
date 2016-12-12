var React = require('react');
var TweetBox = require('./TweetBox');

var App = React.createClass({

  // same as ruby initialize
  getInitialState: function() {
    return {  numbers: [10,20,30,40]}
  },

  render: function() {
    return (
      <div>
        <h1>welcome to hotness</h1>
        {// i want to loop over the above array and for each ele i want a new tweet box
        // options 1) for each, 2) map but you can't use for each as it doesn't return anything because jsx needs a function that RETURN stuff
        }
        {this.state.numbers.map(function(elem, index) {
          return <TweetBox key={index} maxTweetLength={elem} />
        })}
      </div>
    )
  }

});

module.exports = App;
