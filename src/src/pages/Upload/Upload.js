import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import "./Upload.css";
import Progress from "../progress/Progress";
import {SplitButton, Row, Form, Col} from 'react-bootstrap';
import classes from "../SignIn";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false,
            stores: ["SuperYoda",
                "Shufersal Ramat Aviv",
                "SuperYoda Tel-Aviv",
                "SuperYoda East Tel-Aviv",
                "Shufersal Ramat-Gan",
                "SuperYoda South",
                "Rami Levy TLV Center"],
            store: ""
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }

    onFilesAdded(files) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
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
                    onClick={() =>
                        this.setState({ files: [], successfullUploaded: false })
                    }
                >
                    Clear
                </button>
            );
        } else {
            return (
                <button
                    disabled={this.state.files.length < 0 || this.state.uploading}
                    onClick={this.uploadFiles}
                >
                    Upload
                </button>
            );
        }
    }

    render() {
        //const [store, setStore] = React.useState('');
        const handleChange = event => {
            this.state.store = event.target.value;
        };
        return (
            <div className="Botton" >
                <div>
                    <Form >
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Total Price:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="Price" placeholder="Total Price" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Label as="legend" column sm={2} >Store</Form.Label>
                            <Select
                                labelId="select-store-label"
                                id="select-store"
                                value={this.state.store}
                                onChange={handleChange}
                                autoWidth
                            >
                                {this.state.stores.map(function(area, index){
                                    return <MenuItem value={ index }>{area}</MenuItem>;
                                })}
                            </Select>
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
                                        {this.renderProgress(file)}
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