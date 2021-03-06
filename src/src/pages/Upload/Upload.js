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
import Copyright from "../../components/Copyright";
import Box from "@material-ui/core/Box";

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


//const form = document.getElementById("form");
//const fileUpload = document.getElementById("fileUpload");
/*
form.onsubmit = async function(e) {
  e.preventDefault();

  const file = fileUpload.files[0];
  console.log(file);

  const base64File = await toBase64(file);
  console.log(base64File);
};
*/
const toBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


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

    const handleSubmit = async(e) => {
        e.preventDefault();

        const base64File = await toBase64(file[0]);
        console.log(base64File);
        try {
            await uploadReceipt(sid, sum, currentUser.id, base64File);

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

    const onRemoveFile = () => {
        setFile({});
    }

    const handleClear = () => {

    };

    return (
        <div className="Botton" >
            <h1 className="Headline">Upload Receipt</h1>
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
                        <Col sm={10}>
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
                <span className="Title">Upload Receipt</span>
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
                                <div className='remove-file' onClick={onRemoveFile}>X</div>
                                {/*{this.renderProgress(file)}*/}
                            </div>
                        ) : ''}
                    </div>
                </div>
                <div className="Actions">
                    { successfullUploaded ?
                        <button onClick={handleClear}>Clear</button>
                        :
                        <button className='upload' onClick={handleSubmit}>Upload</button>
                    }
                </div>
                <Box pt={4} >
                    <Copyright />
                </Box>
            </div>
        </div>

    );
};

export default Upload;
