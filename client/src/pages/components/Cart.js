import React, { } from "react";
import { Container, Row, Col, Table, Card,  } from "reactstrap";
import CartItem from '../components/CartItem';

export default function Cart(props) {
    console.log(props)
    return (

        <Container>
            <div className="cart-wrapper my-5">
                <Row className="row-divided">
                    {/* Cart CONTENTS FORM and TABLE */}
                    <Col size="lg-8 pb-0">
                        <div className="cart-contents-wrapper">
                            <div className="cart-form">
                                <div className="cart-wrapper sm-touch-scroll">
                                    <Table className="cart-table-contents">
                                        <thead>
                                            <tr>
                                                <th className="product-name" colSpan="3">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-days">Days</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* One Item Row in TABLE */}
                                            {state.products.map((item, i) => {
                                                return (
                                                    <CartItem handleGrandTotal={handleGrandTotal} handleRemove={handleRemove} item={item} />
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col size="lg-4">
                        {/* Cart Totals Side Card TABLE */}
                        <Card>
                            <Card.Body>
                                <div className="cart-collaterals">
                                    <div className="cart-sidebar col-inner"></div>
                                    <div className="cart-totals">
                                        <Table>
                                            <tbody>
                                                <Card.Title>
                                                    <thead>Cart Totals</thead>
                                                </Card.Title>
                                                {/* Cart subtotal row */}
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td data-title="subtotal">
                                                        <strong>
                                                            <span className="subtotal-amount-display">${stateCartTotal.total}</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                {/* Cart shipping row */}
                                                <tr className="shipping cart-shipping-total">
                                                    <th>Shipping</th>
                                                    <td data-title="shipping-data">
                                                        <strong>
                                                            <span className="shipping-amount-display">Flat Rate $10</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                {/* Cart total row */}
                                                <tr className="cart-total">
                                                    <th>Total</th>
                                                    <td data-title="total">
                                                        <strong>
                                                            <span className="total-amount-display">${stateCartTotal.total + 10}</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                {/* PROCEED TO CHECKOUT BUTTON COMPONENT HERE */}
                                                <button className="btn btn-outline-primary rounded-lg" onClick={() => goToPayment()}>Proceed to Checkout!</button>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}


// import React, { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import CartItem from '../CartItem';
// import Auth from '../../utils/auth';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
// import './Cart.css';
// import {connect} from "react-redux";

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// const Cart = (props) => {
//   const { dispatch } = props;
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//   useEffect(() => {
//     if (data) {
//       stripePromise.then((res) => {
//         res.redirectToCheckout({ sessionId: data.checkout.session });
//       });
//     }
//   }, [data]);

//   useEffect(() => {
//     async function getCart() {
//       const cart = await idbPromise('cart', 'get');
//       dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//     }

//     if (!props.cart.length) {
//       getCart();
//     }
//   }, [props.cart.length, dispatch]);

//   function toggleCart() {
//     dispatch({ type: TOGGLE_CART });
//   }

//   function calculateTotal() {
//     let sum = 0;
//     props.cart.forEach((item) => {
//       sum += item.price * item.purchaseQuantity;
//     });
//     return sum.toFixed(2);
//   }

//   function submitCheckout() {
//     const productIds = [];

//     props.cart.forEach((item) => {
//       for (let i = 0; i < item.purchaseQuantity; i++) {
//         productIds.push(item._id);
//       }
//     });

//     getCheckout({
//       variables: { products: productIds },
//     });
//   }

//   if (!props.cartOpen) {
//     return (
//       <div className="cart-closed" onClick={toggleCart}>
//         <span role="img" aria-label="trash">
//           🛒
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <div className="close" onClick={toggleCart}>
//         [close]
//       </div>
//       <h2>Shopping Cart</h2>
//       {props.cart.length ? (
//         <div>
//           {props.cart.map((item) => (
//             <CartItem key={item._id} item={item} />
//           ))}

//           <div className="flex-row space-between">
//             <strong>Total: ${calculateTotal()}</strong>

//             {Auth.loggedIn() ? (
//               <button onClick={submitCheckout}>Checkout</button>
//             ) : (
//               <span>(log in to check out)</span>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h3>
//           <span role="img" aria-label="shocked">
//             😱
//           </span>
//           You haven't added anything to your cart yet!
//         </h3>
//       )}
//     </div>
//   );
// };

// const mapStateToProps =(state) => {
//   return {...state.products};
// };

// export default connect( mapStateToProps )(Cart);



// import React, {Component} from "react";
// import { CardText } from "reactstrap";

// export default function Cart(props){
//     console.log(props)
//     return (
//         <>
//         <h1>
//             In Cart!
//         </h1>
//         </>
//     )


// }



