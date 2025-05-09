import React, { useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import { CartContext } from "./CartContext";


export default function Checkout() {

  let {cartItems} = useContext(CartContext)

  let cartEmpty = cartItems.length <= 0 ? true :false

  let grandTotal = cartItems.reduce((total, product) =>{
    return total += product.price*product.quantity
  },0)
  const freeShippingPrice = 99

  return (
    <div>
      <Title mainTitle="Your shoping cart"/>
      {
        cartEmpty &&
        <div>
          No product in shopping cart.<br/>
          <Link to="/">Go to product list.</Link>

        </div>
      }
      {!cartEmpty &&
      <div>
        <div id="cartSection">
          {cartItems.map((product) => (
            <div key={product.id}>
              <img alt={product.name} src={process.env.PUBLIC_URL+'/img/'+product.image}/>
              {product.name}
              {product.description}
              {product.price}
              Purchase item: {product.quantity}
              <QuantityBtn productInfo={product}/>
            </div>
          )

          )}
        </div>
        <div id="checkOutSection">
          <div>Total price</div>
          <div>${grandTotal}</div>
          {
            grandTotal >= freeShippingPrice ? <div>free shipping</div> :
            <div>
              free shipping for {freeShippingPrice}<br/>
              need {freeShippingPrice-grandTotal}
            </div>
          }
        </div>
      </div>}
    </div>
  );
}
