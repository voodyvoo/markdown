/*
import React, { Component } from 'react';
import Output from './output';
import Input from './input';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <div id='app-wrapper' style={{ height: '100%' , weight:"100%"}}>
                <Input></Input>
                <Output textareaContent={this.state.textareaContent} ></Output>
                </div>
            </React.Fragment>
        ;
    }
}

 
// export default App and connect to redux store;
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default App;
*/
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import Output from "./output";
import Input from "./input";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Input />
          <Output />
        </div>
      </Provider>
    );
  }
}

export default App;