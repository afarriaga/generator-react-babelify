/* jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import DataLoader from './data_loader';

let Example = React.createClass({
  render: function() {
    return (
      <div className="example">
        <h2><em>{this.props.quote}</em> - a React component</h2>

        <DataLoader url={'/api'} />
      </div>
    );
  }
});

export default function(){
  ReactDOM.render(
    <Example quote={"Hello world"} />,
    document.getElementById('root')
  );
}
