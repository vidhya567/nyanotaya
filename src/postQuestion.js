import React, { Component } from 'react';
import constants from './constants';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class PostQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.subject || '',
            topic: this.props.topic || '',
            subTopic: '',
            description: '',
            examRelatedTo: this.props.exam || '',
            examFeatured: false,
            year: '',
            exam: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    isdataInvalid(data) {
        return (!data || data.length === 0);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name,value);
        this.setState({
            [name]: value
        });
    }

    getSubjectOptions() {
        const subjects = this.props.subjects;
        const subjectList = subjects.map( (subject,index) => <option key={index} value={subject}>{subject}</option> );
        return subjectList;
    }

    getRelatedExamList() {
        const exams = ["JEE MAIN","JEE ADVANCED","NEET","AIMS"];
        const examsList = exams.map( (subject,index) => <option key={index} value={subject}>{subject}</option> );
        return examsList;
    }

    showExamandYear() {
        if (this.state.examFeatured) {
            return (
                <div className="form-group row">
                        <label for="year" className="col-sm-1 col-form-label">Year </label>
                        <div class="col-sm-4">
                            <input type="year"  className="form-control" id="year" name="year" value={this.state.year} onChange={this.handleChange}/>
                        </div>
                        <label for="exam" className="col-sm-1 col-form-label">Exam </label>
                        <div class="col-sm-4">
                            <input type="text" name="exam" className="form-control" id="exam" value={this.state.year} onChange={this.handleChange}/>
                        </div>
                </div>
            );
        }
    }


    render() {
        console.log("Rendering Post Question");
        const subjectList = this.getSubjectOptions();
        const examList = this.getRelatedExamList();
        const showExamandYear = this.showExamandYear();
        return(
            <div className="modalBodyWrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="subject" className="alignLeft">Subject </label>
                            <select id="subject" name="subject" className="form-control" value={this.state.subject} onChange={this.handleChange}>
                                {subjectList}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="relatedExam" className="alignLeft"> Related to Exam </label>
                            <select  id="relatedExam" name="relatedExam" className="form-control" value={this.state.subject} onChange={this.handleChange}>
                                {examList}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label for="topic">Specific Topic </label>
                            <input type="text" id="topic" name="topic" className="form-control" value={this.state.topic} onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label> Describe your question here:</label>
                            <textarea  name="description" className="form-control" value={this.state.description} onChange={this.handleChange} rows="5" cols="50">Put equations here...</textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <div className="form-check">
                                <input className="checkbox" type="checkbox" id="examCheck" name="examFeatured" value={this.state.examFeatured} onChange={this.handleChange}>
                                </input>
                                <label className="form-check-label" for="examCheck">
                                    Has this question featured in any exam
                                </label>
                            </div>
                        </div>
                    </div>
                    {showExamandYear}
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <button className="saveDraftButton btn mb-2">Save as a Draft</button>
                        </div>
                        <div className="form-group col-md-3">
                            <button className="submitQuestion btn mb-2">Post Question</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

PostQuestion.defaultProps = {
    subjects: constants.DEFAULT_SUBJECTS
};

