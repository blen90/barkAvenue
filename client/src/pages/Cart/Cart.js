import React, {useState} from "react";
import {CART_ITEM_UPDATE,REMOVE_FROM_CART}  from '../../actions/cart'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Row, Form, FormGroup, Button , Label, Input  } from "reactstrap";
import {connect} from "react-redux";
import './cart.css';

const Cart = (props) => {
    //Setting state for Cart
    const [updateCart,setUpdateCart] = useState({});

    //Adding date to state
    const onChangeDate = (id,date,type) => {
        props.dispatch({type:CART_ITEM_UPDATE,data:{id,[type]:date}});
    }

    //Adding service to cart
    const onChangePackage = (id,e) => {
        let serviceName = e.target.value;
        let price = Number(e.target.name);
        props.dispatch({type:CART_ITEM_UPDATE,data:{id,serviceName,price}});
    }

    //Removing items from cart
    const onRemoveItem = (id) => {
        props.dispatch({type:REMOVE_FROM_CART,id});
    }

    //Check-out
    const onCheckOut = async() => {
        console.log('checkout!!')
        // fetch your data to server side
        
        // clearing reducer data
        props.items.forEach(({id})=> {
            onRemoveItem(id)
        });
    }

    //Setting format for date
    const FORMAT = 'MM/dd/yyyy';
    let grandTotal = 0;
    const items = props.items.map( (
        {serviceName,dateFrom,dateTo,id,totalPrice}
        ,index) => {
            
        grandTotal += totalPrice;
        return (
            <FormGroup key={index} inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="cart-package" className="mr-sm-2">Package</Label>
                    <Input
                    type="select"
                    name="select"
                    onChange={ e =>onChangePackage(id,e)}
                    value={serviceName}>
                        <option name="5" value="Basic Pawsome Stay">Basic Pawsome Stay</option>
                        <option name="10" value="Premium Pawsome Stay" >Premium Pawsome Stay</option>
                        <option name="15" value="Deluxe Pawsome Stay" >Deluxe Pawsome Stay</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">From:</Label>
                    <DayPickerInput
                        format={FORMAT}
                        value={dateFrom}
                        onDayChange={(e)=>onChangeDate(id,e,'dateFrom')}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">To:</Label>
                    <DayPickerInput
                        format={FORMAT}
                        value={dateTo}
                        onDayChange={(e)=>onChangeDate(id,e,'dateTo')}
                    />
                </FormGroup>
                <span>Price: ${totalPrice}</span>
                <Button

                onClick={()=>onRemoveItem(id)} className="checkout"
                >Remove</Button>  

            </FormGroup>
        )
    })

    if(props.items.length === 0) {
        return (
        <div>
            <h1>Cart is empty!</h1>
        </div>
        )
    }

    return (
        <Row>
            <Form>
                {items}
                <Button
                onClick={onCheckOut}
                className="checkout">Check out</Button>
            </Form>
            <p>Total: ${grandTotal}</p>
        </Row>
    )
}

const mapStateToProps =(state) => {
    return {...state.cart};
};
  
export default connect( mapStateToProps )(Cart);