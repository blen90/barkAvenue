import React, {useState} from "react";
import {SUBMIT_CART}  from './acitons/cart'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Row, Form, FormGroup, Button, Form , Label, Input  } from "reactstrap";
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from "react-redux";

export default function Cart(props){
    const [updateCart,setUpdateCart] = useState({});

    const onChangeDate = (userId,e,type) => {
        console.log('onchangedate',e);
    }

    const onChangePackage = (userId,e)=> {
        let package = e.target.value
        console.log('package type', package);

        if(!updateCart[userId]) {
            updateCart[userId] = {}
        }

        updateCart[userId] = {...updateCart[userId],package,userId}
        setUpdateCart(updateCart);
    }

    const onSubmitEdit = (userId) => {
        let updateItem = updateCart[userId]
        // dispatch updateItem
        // props.dispatch({type:'CART_ITEM_UPDATE',data:updateItem});
    }

    const FORMAT = 'MM/dd/yyyy';
    const items = props.items.map( (
        {package,dateFrom,dateTo,userId}
        ,index) => {
        return (
            <FormGroup key={index} inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="cart-package" className="mr-sm-2">Package</Label>
                    <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={ e =>onChangePackage(userId,e)}
                    value={package}>
                        <option>Basic</option>
                        <option>Premium</option>
                        <option>Deluxe</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">From</Label>
                    <DayPickerInput
                        format={FORMAT}
                        value={dateFrom}
                        onDayChange={(e)=>onChangeDate(userId,e,'from')}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">To</Label>
                    <DayPickerInput
                        format={FORMAT}
                        value={dateTo}
                        onDayChange={(e)=>onChangeDate(userId,e,'to')}
                    />
                </FormGroup>
                <Button
                onClick={()=>onSubmitEdit(userId)}
                >Edit</Button>
            </FormGroup>
        )
    })

    return (
        <Row>
            <Form>
                {items}
            </Form>
        </Row>
    )

}

const mapStateToProps =(state) => {
    return {...state.cart};
};
  
export default connect( mapStateToProps )(Cart);



// import React, { } from "react";
// import { Container, Row, Col, Table, Card,  } from "reactstrap";
// import CartItem from '../components/CartItem';

// export default function Cart(props) {
//     console.log(props)
//     return (

//         <Container>
//             <div className="cart-wrapper my-5">
//                 <Row className="row-divided">
//                     {/* Cart CONTENTS FORM and TABLE */}
//                     <Col size="lg-8 pb-0">
//                         <div className="cart-contents-wrapper">
//                             <div className="cart-form">
//                                 <div className="cart-wrapper sm-touch-scroll">
//                                     <Table className="cart-table-contents">
//                                         <thead>
//                                             <tr>
//                                                 <th className="product-name" colSpan="3">Product</th>
//                                                 <th className="product-price">Price</th>
//                                                 <th className="product-days">Days</th>
//                                                 <th className="product-subtotal">Total</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {/* One Item Row in TABLE */}
//                                             {state.products.map((item, i) => {
//                                                 return (
//                                                     <CartItem handleGrandTotal={handleGrandTotal} handleRemove={handleRemove} item={item} />
//                                                 )
//                                             })}
//                                         </tbody>
//                                     </Table>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col size="lg-4">
//                         {/* Cart Totals Side Card TABLE */}
//                         <Card>
//                             <Card.Body>
//                                 <div className="cart-collaterals">
//                                     <div className="cart-sidebar col-inner"></div>
//                                     <div className="cart-totals">
//                                         <Table>
//                                             <tbody>
//                                                 <Card.Title>
//                                                     <thead>Cart Totals</thead>
//                                                 </Card.Title>
//                                                 {/* Cart subtotal row */}
//                                                 <tr className="cart-subtotal">
//                                                     <th>Subtotal</th>
//                                                     <td data-title="subtotal">
//                                                         <strong>
//                                                             <span className="subtotal-amount-display">${stateCartTotal.total}</span>
//                                                         </strong>
//                                                     </td>
//                                                 </tr>
//                                                 {/* Cart shipping row */}
//                                                 <tr className="shipping cart-shipping-total">
//                                                     <th>Shipping</th>
//                                                     <td data-title="shipping-data">
//                                                         <strong>
//                                                             <span className="shipping-amount-display">Flat Rate $10</span>
//                                                         </strong>
//                                                     </td>
//                                                 </tr>
//                                                 {/* Cart total row */}
//                                                 <tr className="cart-total">
//                                                     <th>Total</th>
//                                                     <td data-title="total">
//                                                         <strong>
//                                                             <span className="total-amount-display">${stateCartTotal.total + 10}</span>
//                                                         </strong>
//                                                     </td>
//                                                 </tr>
//                                                 {/* PROCEED TO CHECKOUT BUTTON COMPONENT HERE */}
//                                                 <button className="btn btn-outline-primary rounded-lg" onClick={() => goToPayment()}>Proceed to Checkout!</button>
//                                             </tbody>
//                                         </Table>
//                                     </div>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//         </Container>

//     )
// }