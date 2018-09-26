import React from 'react';
import PropTypes from 'prop-types';
import {Controlled  as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.code
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(value) {
    this.props.changeEditorCode(value);
    this.setState({
      value: value
    })
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.code
    })
  }
  
  render() {
    var options = this.props.options;
    var className = this.props.className;
    return (
      <CodeMirror
        className={className}
        value={this.state.value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          this.handleChange(value);
        }}
        onChange={(editor, value) => {
          // console.log('controlled', {value});
        }}
      />
    );
  }
};

Editor.propTypes = {
  index: PropTypes.number,
	options: PropTypes.object
};

Editor.defaultProps = {
  index: 0,
  options: {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'material'
  }
};

export default Editor;
