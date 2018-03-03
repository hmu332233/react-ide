import React, {Component} from 'react';
import Hello from 'components/Hello';
import Editor from 'components/Editor'
import Compiler from 'api/Compiler'

class App extends Component {
    state = {
        number: 0
    }
    componentDidMount() {
        const increment = () => {
            this.setState({
                number: this.state.number + 1
            });
            setTimeout(increment, 1000);
        }
        increment();
      
        Compiler.compile({code: '123'}, (data) => {
          console.log(data);
        });
    }
    
    render() {
        return (
          <div>
          	<Hello name={`React with Webpack2 (${this.state.number})`}/>
          	<Editor />
          </div>
        );
    }
}

export default App;
