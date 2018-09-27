import React from 'react';
import PropTypes from 'prop-types';

import { CommnadInvoker, Command } from 'common/js/Command';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.commnadInvoker = new CommnadInvoker();
    this.showToast = new Command({
      execute: () => {
        console.log('show toast!');
      },
      undo: () => {
        console.log('undo toast!');
      }
    });

    this.handleClickShowToastButton = this.handleClickShowToastButton.bind(this);
    this.handleClickUndoButton = this.handleClickUndoButton.bind(this);
  }

  handleClickShowToastButton() {
    this.commnadInvoker.execute(this.showToast);
  }

  handleClickUndoButton() {
    this.commnadInvoker.undo();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickShowToastButton}>show toast</button>
        <button onClick={this.handleClickUndoButton}>undo</button>
      </div>
    );
  }
};

MenuBar.propTypes = {
};

MenuBar.defaultProps = {
};

export default MenuBar;
