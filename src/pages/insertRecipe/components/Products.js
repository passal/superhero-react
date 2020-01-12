
import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../insertRecipe.css';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const MyButton = styled(Button)({
    color: '#fff',
    backgroundColor: "blue",
    borderColor: "blue",
    marginRight: '10px'
});

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.filterText = "";
        this.state.products = this.props.withPrice? [
            {
                id: 0,
                name: "",
                price: "",
                qty: 0
            }
        ] :[
            {
                id: 0,
                name: "",
                qty: 0
            }
        ];

    }

    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = this.props.withPrice? [
            {
                id: id,
                name: "",
                price: "",
                qty: 0
            }
        ] :[
            {
                id: id,
                name: "",
                qty: 0
            }
        ];
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
                if (key == item.name && toString(product.id) == item.id) {
                    product[key] = item.value;
                    console.log('key' , key , 'val', item.value)
                }
            }
            return product;
        });
        this.setState({products:newProducts});
    };
    render() {
        return (
            <div>
                <ProductTable  withPrice ={this.props.withPrice} onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
            </div>
        );
    }
}
export default Products;



class ProductTable extends React.Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var withPrice =this.props.withPrice
        var product = this.props.products.map(function(product) {
            return (<ProductRow withPrice ={withPrice} onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
            <div>
                <div className={"insertTable"}>
                <table id="table" className={"table table-bordered"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        {this.props.withPrice &&
                        <th>Price</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {product}
                    </tbody>
                </table>
                </div>
                <div>
                    <MyButton type="button" onClick={this.props.onRowAdd} >Add Product </MyButton>
                    <MyButton type="button">Submit</MyButton>
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
        return (
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "name",
                    value: this.props.product.name,
                    id: this.props.product.id,
                    inputProps: {},
                    placeHolder:"Product name",
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "qty",
                    value: this.props.product.qty,
                    id: this.props.product.id,
                    inputProps: {},
                    placeHolder:"Quantity"
                }}/>
                {this.props.withPrice &&
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "price",
                    value: this.props.product.price,
                    id: this.props.product.id,
                    placeHolder:"Price",
                    inputProps: {
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    },
                }}/>
                }
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
                </td>
            </tr>
        );

    }
}
class EditableCell extends React.Component {

    render() {
        return (
            <td>
                <TextField
                    id={toString(this.props.cellData.id)}
                    InputProps={this.props.cellData.inputProps}
                    variant="outlined"
                    name ={this.props.cellData.type}
                    onChange={this.props.onProductTableUpdate}
                    placeholder={this.props.cellData.placeHolder}
                />
            </td>
        );

    }

}

