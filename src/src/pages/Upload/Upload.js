import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import "./Upload.css";
import Progress from "../progress/Progress";
import {SplitButton, Row, Form, Col} from 'react-bootstrap';
import classes from "../SignIn";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

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
            area:"",
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
        // here send state to backend (area , and sum)
        //if needed save state in local storage
        localStorage.setItem('points', JSON.stringify(2));
        window.location = '/userMenu';
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
        const zones = ["SuperYoda",
            "Shufersal Ramat Aviv",
            "SuperYoda Tel-Aviv",
            "SuperYoda East Tel-Aviv",
            "Shufersal Ramat-Gan",
            "SuperYoda South",
            "Rami Levy TLV Center"];
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250
                }
            }
        };

        return (
            <div className="Botton" >
                <div className="TopSpace">
                    <Form >
                        <Form.Group as={Row}  className={classes.input}  controlId="formHorizontalEmail">
                            <Form.Label column sm={2} className={classes.font}>
                                Total Price:
                            </Form.Label>
                            <Col sm={3}>
                                <Form.Control onChange={this.handleChange("sum")} type="Price" placeholder="Total Price" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Label as="legend" column sm={2} className={classes.font}>Select Area</Form.Label>
                            <Col sm={3}>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        labelId="demo-mutiple-checkbox-label"
                                        id="areaButton"
                                        value={this.state.area}
                                        onChange={this.handleChange("area")}
                                        input={<Input />}
                                        MenuProps={MenuProps}
                                    >
                                        {zones.map(name => (
                                            <MenuItem key={name} value={name}>
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
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