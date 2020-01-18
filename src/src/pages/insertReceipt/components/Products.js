
import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../insertReceipt.css';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';


const MyButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#20639B',
    borderColor: "#20639B",
    marginRight: '10px'
});
const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        minWidth:'400px',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    popRoot:{
        minWidth: '400px',
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            numRow: 0,
            filterText:  "",
            products :this.props.withPrice? [
                {
                    id: '0',
                    name: "",
                    price: "",
                    qty: 0
                }
            ] :[
                {
                    id: '0',
                    name: "",
                    qty: 0
                }
            ],
        }
    }


    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = this.props.withPrice == true ?
            {
                id: id,
                name: "",
                price: "",
                qty: 0
            }
         :
            {
                id: id,
                name: "",
                qty: 0
            }
        ;
        this.state.products.push(product);
        this.setState(this.state.products);
    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };

        var products = this.state.products.slice();
        var newProducts = products.map(function(product) {

            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({products:newProducts});
    };
    handleProductTableName(evt,value) {
        const id = evt.target.id.split('-')[0]

        var item = {
            id: id,
            value: value,
        };

        var products = this.state.products.slice();
        var newProducts = products.map(function(product) {
                if ( product.id == item.id) {
                    product['name'] = item.value;
                }
            return product;
        });
        this.setState({products:newProducts});
    };

    render() {
        console.log(this.state.products)
        return (
            <div>
                <ProductTable  withPrice ={this.props.withPrice} onProductTableUpdate={this.handleProductTable.bind(this)} onProductTableUpdateName={this.handleProductTableName.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
            </div>
        );
    }
}
export default Products;



class ProductTable extends React.Component {

    handleClickOpen = () => {
        if(this.props.withPrice == true){
            console.log('submit products',this.props.products)
            // if(checkTotalPrice()){
            //call server with product table (this.props.product)
            //     this.setState({
            //         popTitle:'Thank you!',
            //         popContent:'You earn 1 point'
            //     })
            // }
            // else{
            //     this.setState({
            //         popTitle:'Please check your cart',
            //         popContent:'The total price of the products in the cart is incorrect '
            //     })


            // }
            this.setState( {isOpen: true});
        }
        else{
            console.log('submit products',this.props.products)
        }
    };
    handleClose = () => {
        this.setState( {isOpen: false});
    };

    constructor(props) {
        super(props);
        this.state ={
            isOpen: false,
            popTitle:'Thank you!',
            popContent:'You earn 1 point'

    }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var onProductTableUpdateName = this.props.onProductTableUpdateName;
        var rowDel = this.props.onRowDel;
        var withPrice =this.props.withPrice
        var product = this.props.products.map(function(product) {
            return (<ProductRow withPrice ={withPrice} onProductTableUpdate={onProductTableUpdate} onProductTableUpdateName={onProductTableUpdateName} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
            <div>
                <div className={"insertTable"}>
                <table id="table" className={"table table-bordered"}>
                    <thead>
                    <tr>
                        <th className={"text"}>Product Name</th>
                        <th className={"text"}>Quantity</th>
                        {this.props.withPrice &&
                        <th className={"text"}>Price</th>}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {product}
                    </tbody>
                </table>
                </div>
                <div>
                    <MyButton type="button" onClick={this.props.onRowAdd} >Add Product </MyButton>
                    <MyButton type="button"  onClick={this.handleClickOpen} >Submit</MyButton>
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.isOpen}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            {this.state.popTitle}
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                {this.state.popContent}
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={this.handleClose} color="primary">
                                Ok Thanks!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>

        );

    }

}
class ProductRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.product);
    }

    render() {
        const ProductOptions = [
            { title: 'Tomato' },
            { title: 'Water' },
            { title: 'Milk' },
            { title: 'Butter' },
            { title: 'Onion' },
            { title: 'Flour' },
            { title: 'Salt' },
        ];
        return (
            <tr className="eachRow">
                <td>
                    <Autocomplete
                        id={this.props.product.id}
                        options={ProductOptions}
                        name ="name"
                        getOptionLabel={option => option.title}
                        style={{ width: 300 }}
                        onInputChange={this.props.onProductTableUpdateName}
                        renderInput={(params) => (
                            <TextField   {...params}  placeholder="Product Name " variant="outlined" fullWidth />
                        )}
                    />
                {/*<TextField*/}
                {/*    id={this.props.product.id}*/}
                {/*    variant="outlined"*/}
                {/*    name ="name"*/}
                {/*    onChange={this.props.onProductTableUpdate}*/}
                {/*    placeholder="Product Name"*/}
                {/*/>*/}
                    </td>
                <td>
                    <TextField
                        id={this.props.product.id}
                        variant="outlined"
                        name ="qty"
                        onChange={this.props.onProductTableUpdate}
                        placeholder="Quantity"
                    />
                </td>
                <td>
                    <TextField
                        id={this.props.product.id}
                        variant="outlined"
                        name ="price"
                        onChange={this.props.onProductTableUpdate}
                        placeholder="Price"
                        inputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>,}}
                    />
                </td>
                <td>
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" id="delete"/>
                </td>
            </tr>
        );

    }
}
class EditableCell extends React.Component {

    render() {
        const ProductOptions = [
            { title: 'Tomato' },
            { title: 'Water' },
            { title: 'Milk' },
            { title: 'Butter' },
            { title: 'Onion' },
            { title: 'Flour' },
            { title: 'Salt' },
        ];
        return (
            <td>
                {/*{this.props.isName == true?(*/}
                {/*<Autocomplete*/}
                {/*    id={this.props.cellData.id}*/}
                {/*    options={ProductOptions}*/}
                {/*    name ={this.props.cellData.type}*/}
                {/*    getOptionLabel={option => option.title}*/}
                {/*    style={{ width: 300 }}*/}
                {/*    onInputChange={this.props.onProductTableUpdate}*/}
                {/*    renderInput={(params) => (*/}
                {/*        <TextField   {...params}  placeholder={this.props.cellData.placeHolder} variant="outlined" fullWidth />*/}
                {/*    )}*/}
                {/*/>):(*/}
                {/*<TextField*/}
                {/*    id={this.props.cellData.id}*/}
                {/*    InputProps={this.props.cellData.inputProps}*/}
                {/*    variant="outlined"*/}
                {/*    name ={this.props.cellData.type}*/}
                {/*    onChange={this.props.onProductTableUpdate}*/}
                {/*    placeholder={this.props.cellData.placeHolder}*/}
                {/*/>*/}
                {/*/!*)*!/*/}
            </td>
        );

    }

}

