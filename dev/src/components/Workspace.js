import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs'
import Editor from './Editor'

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files,
      activeFileIndex: 0
    };
   
    this.changeEditorCode = this.changeEditorCode.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }

  changeEditorCode(code) {
    const activeFileIndex = this.state.activeFileIndex;
    this.state.files[activeFileIndex].code = code;
    this.setState({
      files: this.state.files
    });
  }

  changeActiveTab(index) {
    this.setState({
      activeFileIndex: index
    });
  }

  render() {
    return (
      <div className="workspace">
        <Tabs
          className="workspace__tabs"
          files={this.state.files}
          changeActiveTab={this.changeActiveTab}
          activeFileIndex={this.state.activeFileIndex}
        />
        <Editor 
          className="workspace__editor"
          changeEditorCode={this.changeEditorCode}
          code={this.state.files[this.state.activeFileIndex].code}
        />
      </div>
    );
  }
}

Workspace.propTypes = {
	files: React.PropTypes.array
};

Workspace.defaultProps = {
  files: [
    {
      title: 'test1.js',
      code: 'test1',
    },
    {
      title: 'test2.js',
      code: 'test2',
    },
    {
      title: 'test3.js',
      code: 'test3',
    },
    {
      title: 'test4.js',
      code: 'test4',
    }
  ]
};

export default Workspace;
