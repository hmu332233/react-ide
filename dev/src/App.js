import React, {Component} from 'react';
import Hello from 'components/Hello';
import Workspace from 'components/Workspace'
import Runner from 'api/Runner'

import { withToastify, toast, ToastMessage } from 'hocs/withToastify.js';

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
          	<Hello name={`React with Webpack2 (${this.state.number})`}/>
          	<WorkspaceWithToastify />
          </div>
        );
    }
}

export default App;
