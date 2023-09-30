/*
import React, { Component } from 'react';


class Output extends Component {
    state = {  } 
    render() { 
        return (
            <div id="preview">
                <div>{this.props.textareaContent}</div>
            </div>
        );
    }
}
 
export default Output;
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { marked } from "marked";

class Output extends Component {

  render() {
    return (
      <div id="preview"  dangerouslySetInnerHTML={{__html:marked(this.props.textareaContent)}}>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  textareaContent: state.textareaContent,
});


export default connect(mapStateToProps)(Output);