import React, { Component } from 'react';
import PostQuestion from './postQuestion';

export default class ModalWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: true
        }
    }

    render() {
        console.log("rendering Modal");
        if (this.state.modalOpen) {
            console.log("open");
            return <div className="modalQuestionPost">
                    <div class="modal-header">
                        <h3>Post your Question</h3>
                        <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <PostQuestion {...this.props}/>
                  </div>
        }
        return null;
    }
}