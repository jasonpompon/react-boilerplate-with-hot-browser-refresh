var React = require('react');
require('./TweetBox.css');

var TweetBox = React.createClass({

  getInitialState: function() {
    return {
      content: '',
      maxTweetLength: this.props.maxTweetLength
    }
  },

  handleChange: function(event) {
    // console.log(event.target.value);
    this.setState({ content: event.target.value });
  },

  render: function() {
    // var maxTweetLength = this.state.maxTweetLength;
    // var content = this.state.content;
    var { content, maxTweetLength } = this.state; // destruturing shortcut in es6 commonly used in react. Its doing the same thing as the 2 lines above
    var isDisabled = content.length <= 0 || content.length > maxTweetLength

    var spanStyle = content.length > maxTweetLength ? {color: 'red'} : {}

    // if (content.length > maxTweetLength) {
    //   var spanClass = 'warning'
    // } else {
    //   var spanClass = ''
    // }
    var spanClass = content.length > maxTweetLength ? 'warning' : '' // one line if statement called 'turnuring' its doing exactly the same thing as the aboved if statement

    return (
      <div>
        <textarea onChange={this.handleChange}></textarea>
        <br />
        <button disabled={isDisabled}>tweet</button>
        <span className={spanClass}>
          { maxTweetLength - content.length }
        </span>
      </div>
    )
  }

})

module.exports = TweetBox;
