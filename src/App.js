import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    state = {
        error: ''
    }

    changeErrorMsg = (errorFromChild) => {
        this.setState({
          error: errorFromChild
        })
      }


    render() {
        return (<div>
            <Form 
                changeErrorMsg = {this.changeErrorMsg}
            />
            <Message
                errorMsg = {this.state.error}
            />
        </div>);
    }
}

export default App;
