import React, {useState} from "react";
import { VIEW_CART}  from '../../actions/cart'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Row, Form, FormGroup, Button , Label, Input  } from "reactstrap";
import {connect} from "react-redux";


const Checkout = (props) => {
    console.log('this is the checkout component', props)
    
return ( 
    <>
    <h1>checkout</h1>
    {props.cartItems.map(eachCart => 
        <div>
        <h2>{eachCart.serviceName}</h2>
        <div> dateFrom: {eachCart.dateFrom}
        dateTo: {eachCart.dateTo}</div>
        <p>Price: {eachCart.totalPrice}</p>
        </div>

    )}
    <div>totalValue: ${props.grandTotal}</div>
    </>

)
}


  
export default Checkout