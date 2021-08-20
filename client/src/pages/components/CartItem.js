// import Reservation from '../Reservation/Reservation';

// export default function CartItem() {
// return (
//     <tr className="cart-item">
//         <td className="product-remove">
//             <button aria-label="Remove this item" onClick={(e) => { e.preventDefault(); props.handleRemove(props.item._id, props.item.customerId)}} className="remove"><i className="far fa-trash-alt "></i></button>
//         </td>
//         <td className="product-thumbnail">
//             <a><img src={`../assets/Image/${props.item.img_url}`} alt="product" className="thumbnail-img"></img></a>
//         </td>
//         <td className="product-name" data-title="Product">{props.item.name}</td>
//         <td className="product-price" data-title="Price">
//             <span className="price-amount">${props.item.price}</span>
//         </td>
//         <td className="product-subtotal" data-title="Total">
//             <span className="product-amount amount">${state.quantity * state.productPrice}</span>
//         </td>
//     </tr>
// );
// }