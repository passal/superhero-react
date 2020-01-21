import React, { Component } from "react";
import Dropzone from "./dropzone/Dropzone";
import "./Upload.css";
import Progress from "./progress/Progress";
import {SplitButton, Row, Form, Col} from 'react-bootstrap';
import classes from "../SignIn";

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false,
            sid: "",
            sum: 0,
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.renderActions = this.renderActions.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    onFilesAdded(files) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    clickHandler(e){
        console.log("hey my hame is shir");
        console.log(this.state)
    }

    handleChange(arg) {
        return (e) => {
            console.log("hello here i changed");
            this.setState({
                [arg]: e.target.value,
            })
        }
    }

    renderProgress(file) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
            return (
                <div className="ProgressWrapper">
                    <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
                    <img
                        className="CheckIcon"
                        alt="done"
                        src="baseline-check_circle_outline-24px.svg"
                        style={{
                            opacity:
                                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                        }}
                    />
                </div>
            );
        }
    }

    renderActions() {
        if (this.state.successfullUploaded) {
            return (
                <button
                    onClick={this.clickHandler
                    }
                >
                    Clear
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.clickHandler}
                >
                    Upload
                </button>
            );
        }
    }

    render() {

        return (
            <div className="Botton" >
                <div className="TopSpace">
                    <Form >
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Total Price:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={this.handleChange("sum")} type="Price" placeholder="Total Price" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Label as="legend" column sm={2} >Store</Form.Label>
                            <Col sm={10} className={classes.checkBox}>
                                {["SuperYoda",
                                  "Shufersal Ramat Aviv",
                                  "SuperYoda Tel-Aviv",
                                  "SuperYoda East Tel-Aviv",
                                  "Shufersal Ramat-Gan",
                                  "SuperYoda South",
                                  "Rami Levy TLV Center"].map((supermarket) => (
                                    <Row>
                                        <Form.Check type="checkbox" label={supermarket} />
                                    </Row>
                                ))}
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row}>

                        </Form.Group>
                    </Form>
                </div>
                <div className="Upload">
                    <span className="Title">Upload Files</span>
                    <div className="Content">
                        <div>
                            <Dropzone
                                onFilesAdded={this.onFilesAdded}
                                disabled={this.state.uploading || this.state.successfullUploaded}
                            />
                        </div>
                        <div className="Files">
                            {this.state.files.map(file => {
                                return (
                                    <div key={file.name} className="Row">
                                        <span className="Filename">{file.name}</span>
                                        {/*{this.renderProgress(file)}*/}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="Actions">{this.renderActions()}</div>
                </div>
            </div>

        );
    }
}

export default Upload;
