import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'test'
    }
  }
  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
  }
  render() {
    var options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'javascript',
      theme: 'material'
    };
    return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
  }
};

export default Editor;
