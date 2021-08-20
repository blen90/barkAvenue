import React, {Component} from "react";
import { CardText } from "reactstrap";

export default function Cart(props){
    console.log(props)
    return (
        <>
        <h1>
            In Cart!
        </h1>
        </>
    )

}

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