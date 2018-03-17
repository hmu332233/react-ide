import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(index) {
    this.props.changeActiveTab(index);
  }
  
  render() {
    const className = this.props.className;
    const tabElements = this.props.files.map((file, i) => {
      let isActive = (i === this.props.activeFileIndex)
      return (
        <li className="nav-item" onClick={(e) => {this.handleClickTab(i)}}>
          <a className={'workspace__tab nav-link ' + (isActive ? 'active' : '')} href="#">
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
	files: React.PropTypes.array,
  activeFileIndex: React.PropTypes.number
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
