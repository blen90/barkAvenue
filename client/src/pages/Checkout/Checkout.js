import React, {useState} from "react";
import { VIEW_CART}  from '../../actions/cart'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Card, Form, FormGroup, Button , Label, Input } from "reactstrap";
import {connect} from "react-redux";
import "./Checkout.css"


const Checkout = (props) => {
    console.log('this is the checkout component', props)
    
return ( 
    <div>
    <Card className="checkout-form">
    <h1>Checkout</h1>
    <br></br>
    {props.cartItems.map(eachCart => 
        <div>
        <h5>{eachCart.serviceName}</h5>
        <h5> Reservation From: {eachCart.dateFrom}</h5> 
       <h5> Reservation To: {eachCart.dateTo}</h5>  
        <h5>Price: ${eachCart.totalPrice}.00</h5>
        <br></br>
        </div>

    )}
    <h4>Total: ${props.grandTotal}.00</h4>
    <Input type='text' placeholder='Card Holder' name='owner' className="checkout-input"/>
    <Input type='text' placeholder='Credit Card Number' name='payment' className="checkout-input"/>
    <Input type='text' placeholder='CVV' name='cvv' className="checkout-input1" />
    <Input type='text' placeholder='Expiration date' name='expiration' className="checkout-input1" />
    <Button className="confirmation-payment checkout-input1"> Proceed to Payment </Button>
    </Card>
    </div>

    
)
}


  
export default Checkout