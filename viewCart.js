import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from './addToCart';
import { useState } from "react";
import { addItemToCart } from './addToCart';

function Cart() {
    const [itemQuantities, setItemQuantities] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (itemId) => {
    dispatch(removeItemFromCart(itemId))
  };

 

  const handleCheckout = () => {
    const updatedCartItems = cartItems.map((item) => {
   const updatedQuantity= itemQuantities[item.id] || item.quantity;

      return{title:item.title, quantity:updatedQuantity||1}
    });

    console.log("Checkout items:");
    console.log(JSON.stringify(updatedCartItems, null, 2));

  };

 

  const handleQuantityChange = (itemId, quantity) => {
    setItemQuantities({...itemQuantities, [itemId]:quantity})
  };



  return (
    <>
      <div className="container">
        <button onClick={handleCheckout}>Checkout</button>
        <div className="row row-cols-md-4 g-4">
          {cartItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card border-light" style={{ width: "18rem", height: "100%" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  style={{ objectFit: "contain", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>{item.title}</h5>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    style={{ width: "40px", margin: "5px" }}
                    value={itemQuantities[item.id] || item.quantity} // Use local state for quantity
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    defaultValue={item.quantity}
                    min={1}
                  />
                  <button
                    style={{ backgroundColor: 'red', color: 'white', border: '0' }}
                    onClick={() => handleRemove(item)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Cart;
