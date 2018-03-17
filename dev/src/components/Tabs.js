import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files
    }
  }

  onChangeFile(index) {
    
  }
  
  onClickTab() {
     console.log('test');
  }
  
  render() {
    const className = this.props.className;
    const tabElements = this.state.files.map(file => {
      return (
        <li className="nav-item" onClick={this.onClickTab}>
          <a className={'workspace__tab nav-link ' + (file.active ? 'active' : '')} href="#">
            {file.title}
          </a>
        </li>
      );
    });
    return (
      <ul className={className + " nav nav-tabs"}>
        {tabElements}
      </ul>
    );
  }
};

Tabs.propTypes = {
	files: React.PropTypes.array
};

Tabs.defaultProps = {
  files: [
    {
      title: 'test1.js',
      active: true
    },
    {
      title: 'test2.js',
      active: false
    },
    {
      title: 'test3.js',
      active: false
    },
    {
      title: 'test4.js',
      active: false
    }
  ]
};

export default Tabs;
