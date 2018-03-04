import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test'
    }
  }

  render() {
    var className = this.props.className;
    return (
      <ul className={className + " nav nav-tabs"}>
        <li className="nav-item">
          <a className="workspace__tab nav-link active" href="#">test1.js</a>
        </li>
        <li className="nav-item">
          <a className="workspace__tab nav-link" href="#">test2.js</a>
        </li>
        <li className="nav-item">
          <a className="workspace__tab nav-link" href="#">test3.js</a>
        </li>
        <li className="nav-item">
          <a className="workspace__tab nav-link" href="#">test4.js</a>
        </li>
      </ul>
    );
  }
};

export default Tabs;
