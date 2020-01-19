import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Form from "react-bootstrap/Form";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    chip: {
        margin: 2
    },
    noLabel: {
        marginTop: theme.spacing(3)
    },
    font:{
        fontWeight: 'bold',
        color:'#20639B',
        lineHeight: 'normal',
        paddingTop: '0px'
    },
}));

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


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium
    };
}

export default function MultipleSelect(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <FormControl className={classes.formControl}>
            <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={props.StoreName}
                onChange={props.handleChangeStores}
                input={<Input />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
            >
                {props.names.map(name => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={props.StoreName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
