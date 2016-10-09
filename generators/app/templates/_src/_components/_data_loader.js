/* jshint esversion: 6 */
import React from 'react';
import $ from 'jquery';

export default React.createClass({
  load: function(){
    if (this.state.data)
      return;

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function(){
    return {}
  },

  render: function() {
    const stringified = JSON.stringify(this.state.data, null, 2)

    return (
      <div className="data-loader">
        <button onClick={this.load}>
          Load remote data
        </button>

        { this.state.data ? <pre>{stringified}</pre> : null }
      </div>
    );
  }
});
