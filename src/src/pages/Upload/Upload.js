import React, { Component, useState } from "react";
import axios from 'axios';
import { Select } from '@material-ui/core';
import { Row, Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Dropzone from "./dropzone/Dropzone";
import classes from "../SignIn";
import "./Upload.css";
import { SHOP_TO_ID } from '../../constants';

const uploadReceipt = (sid, sum, uid, img) => {
    return axios.post("http://localhost:5000/uploadReceipt", {
        sid,
        sum,
        img,
        id: uid
    } , {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return { success: true }
    }).catch((error) => {
        console.log(error);
        throw error
    })
};



const Upload = ({currentUser, setCurrentUser}) => {
    const history = useHistory();

    const [file, setFile] = useState(undefined);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [successfullUploaded, setSuccessfullUploaded] = useState(false);
    const [sid, setSid] = useState(1);
    const [sum, setSum] = useState(0);

    const onFilesAdded = (newFile) => {
        console.log(newFile);
        setFile(newFile);
    };

    const handleSubmit = async() => {
        try {
            await uploadReceipt(sid, sum, currentUser.id);

            setCurrentUser({
                ...currentUser,
                credits: currentUser.credits + 1
            });
            history.push('/userMenu');
        } catch (e) {
            alert('Something went wrong');
            console.log(e)
        }
    };

    const handleClear = () => {

    };

    return (
        <div className="Botton" >
            <div className="TopSpace">
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Total Price:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={sum} onChange={(e) => setSum(e.target.value)} type="Price" placeholder="Total Price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label as="legend" column sm={2} >Store</Form.Label>
                        <Col sm={10} className={classes.checkBox}>
                            <Select value={sid} onChange={(e) => setSid(e.target.value)}>
                                {Object.keys(SHOP_TO_ID).map((supermarket) => (
                                    <MenuItem value={SHOP_TO_ID[supermarket]}>{supermarket}</MenuItem>
                                ))}
                            </Select>

                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <div className="Upload">
                <span className="Title">Upload Files</span>
                <div className="Content">
                    <div>
                        <Dropzone
                            onFilesAdded={onFilesAdded}
                            disabled={uploading || successfullUploaded}
                        />
                    </div>
                    <div className="Files">
                        {file && file[0] !== undefined ? (
                            <div key={file[0].name} className="Row">
                                <span className="Filename">{file[0].name}</span>
                                {/*{this.renderProgress(file)}*/}
                            </div>
                        ) : ''}
                    </div>
                </div>
                <div className="Actions">
                    { successfullUploaded ?
                        <button onClick={handleClear}>Clear</button>
                        :
                        <button onClick={handleSubmit}>Upload</button>
                    }
                </div>
            </div>
        </div>

    );
};

export default Upload;
