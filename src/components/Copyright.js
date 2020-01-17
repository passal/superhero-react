import Typography from "@material-ui/core/Typography";
import React from "react";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Super-Hero '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;