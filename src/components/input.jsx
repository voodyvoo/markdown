import React, { Component } from 'react';
import { connect } from "react-redux";
import { setTextareaContentAction } from "../actions/actions";

class Input extends Component {
      handleTextareaChange = (event) => {
        const { value } = event.target;
        // Aktualisiere den Redux-Store mit dem neuen Textinhalt
        this.props.setTextareaContentAction(value);       
      }

    render() { 
        return (
            <textarea 
            id="editor" 
            type="text"
            rows ="5"
            cols ="40"
            defaultValue={this.props.textareaContent} 
            onChange={this.handleTextareaChange}>
            
            </textarea>
        );
    }
}

// Konfiguriere die Connection der Input-Props zum State des Redux-Stores
const mapStateToProps = (state) => ({
    textareaContent: state.textareaContent,
  });
  
// Konfiguriere die Connection um die Actions des Redux-Stores zu den Input-Props zu dispatchen
const mapDispatchToProps = {
    setTextareaContentAction,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);