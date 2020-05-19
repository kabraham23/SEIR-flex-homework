const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };
 
  class MyFirstComponent extends React.Component {
    render(){
      return (
      <div>{ 'My First React Component! '}</div>
    )}
  };

  module.exports = MyFirstComponent;