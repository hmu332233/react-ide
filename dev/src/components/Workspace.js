import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs'
import Editor from './Editor'

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test'
    }
  }

  render() {
    return (
      <div className="workspace">
        <Tabs className="workspace__tabs"/>
        <Editor className="workspace__editor"/>
      </div>
    );
  }
};

export default Workspace;
