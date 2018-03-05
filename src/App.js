import React, { Component } from 'react';
import university from './university.svg';
import lightbulb from './lightbulb.svg';
import search from './search.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModalWrapper from './modalWrapper';

class App extends Component {
   constructor(props) {
       super(props);
       this.state = {
           openPostQuestionModal: false
       }
       this.renderPostQuestionModal = this.renderPostQuestionModal.bind(this);
   }

  renderPostQuestionModal() {
      this.setState({
          openPostQuestionModal: true
      })
  }

  render() {
    const questionModal = this.state.openPostQuestionModal ? <ModalWrapper/>:null;
    return (
      <div className="App">
        <header className="App-header">
            <div className="row">
                <div className="col-1">
                    <img src={lightbulb} className="App-logo" alt="logo" />
                </div>
                <div className="col-1" >
                    <img src={university} className="App-logo" alt="logo" />
                </div>
                <div className="col-4">
                    <h1 className="App-title">Nyanotaya</h1>
                </div>
                <div className="col-1" >
                    <img src={search} className="App-logo" alt="logo" />
                </div>
            </div>
        </header>
            <button className="btn btn-primary postQuestionButton" onClick={this.renderPostQuestionModal}>
                Post a Question
            </button>
          {questionModal}
      </div>
    );
  }
}

export default App;
