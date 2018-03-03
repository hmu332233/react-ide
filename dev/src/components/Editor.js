import React from 'react';
import {Controlled  as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test'
    }
  }

  render() {
    var options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'material'
    };
    return (
      <CodeMirror
        value={this.state.value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          this.setState({
            value: value
          });
        }}
        onChange={(editor, value) => {
          console.log('controlled', {value});
        }}
      />
    );
  }
};

export default Editor;
