import React, { Component } from 'react';
import Hello from 'components/Hello';
import Workspace from 'containers/Workspace';
import MenuBar from 'containers/MenuBar';

import { withToastify, toast, ToastMessage } from 'hocs/withToastify';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  componentDidMount() {
    // const increment = () => {
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    //     setTimeout(increment, 1000);
    // }
    // increment();

    // Runner.run({code: 'console.log("test");'}, (data) => {
    //   console.log(data);
    // });

    toast(ToastMessage.SUCCESS);
  }

  render() {
    const WorkspaceWithToastify = withToastify(Workspace);
    console.log(WorkspaceWithToastify);

    return (
      <div>
        <Hello name={`React with Webpack2 (${this.state.number})`} />
        <MenuBar />
        <WorkspaceWithToastify />
      </div>
    );
  }
}

export default App;
