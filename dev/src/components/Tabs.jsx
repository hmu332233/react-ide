import React from 'react';
import PropTypes from 'prop-types';
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
        <li className="nav-item" onClick={(e) => {this.handleClickTab(i)}} key={`${file.title}_${i}`}>
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
	changeActiveTab: PropTypes.func,
  activeFileIndex: PropTypes.number
};

Tabs.defaultProps = {
};

export default Tabs;
