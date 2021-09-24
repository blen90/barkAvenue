import React from "react";
import {Button, Input } from "reactstrap";

import "./Checkout.css"


const Checkout = (props) => {
    console.log('this is the checkout component', props)

    return (
        <div className="card">
            <h1>Checkout</h1>
            <br></br>
            {props.cartItems.map(eachCart =>
                <div key={eachCart.id}>
                    <h5>{eachCart.serviceName}</h5>
                    <h5> Reservation From: {eachCart.dateFrom}</h5>
                    <h5> Reservation To: {eachCart.dateTo}</h5>
                    <h5>Price: ${eachCart.totalPrice}.00</h5>
                    <br></br>
                </div>

            )}
            <h4>Total: ${props.grandTotal}.00</h4>
            <Input type='text' placeholder='Card Holder' name='owner' className="checkout-input" />
            <Input type='text' placeholder='Credit Card Number' name='payment' className="checkout-input" />
            <div className="cc">
            <Input type='text' placeholder='CVV' name='cvv' className="checkout-input1" />
            <Input type='text' placeholder='Expiration' name='expiration' className="checkout-input1" />
            </div>
            <Button className="confirmation-payment checkout-input2"> Proceed to Payment </Button>
        </div>


    )
}



export default Checkout