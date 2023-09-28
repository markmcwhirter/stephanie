// shopping cart code
import * as React from "react";
import PaypalForm from '../util/PaypalForm';

const products = [
  { id: 1, name: "Book - Finally Free", price: 15.00.toFixed(2) }
];

function calculateTotal(cart) {
  return cart.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
}

const initialState = [];


function reducer(cart, action) {
  if (action.type === "add") {
    const inCart = Boolean(cart.find((item) => item.id === action.id));

    if (!inCart) {
      const product = products.find((p) => p.id === action.id);
      return [...cart, { ...product, quantity: 1 }];
    }

    return cart.map((item) =>
      item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else if (action.type === "update") {
    if (action.adjustment === "increment") {
      return cart.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    const item = cart.find(({ id }) => action.id === id);

    if (item.quantity === 1) {
      return cart.filter((item) => item.id !== action.id);
    } else {
      return cart.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  } else {
    return cart;
  }
}

export default function ShoppingPage() {
  const [cart, dispatch] = React.useReducer(reducer, initialState);

  const handleAddToCart = (id) => dispatch({ type: "add", id });

  const handleUpdateQuantity = (id, adjustment) => {
    dispatch({
      type: "update",
      id,
      adjustment
    });
  };



  return (
    <div id="shoppage" className="torn-paper">
      <div className="columns-3">
        <div className="bg-left"></div>
        <div className="bg-middle styled-paragraph">

          <section>
            <div>
              <ul className="products">
                {products.map((product) => (
                  <li key={product.id}>
                    <span>{product.name} - &pound;&nbsp;{product.price}</span><span>&nbsp;&nbsp;</span>
                    <span><button className="primary"  onClick={() => handleAddToCart(product.id)}> Add </button></span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <hr />
          <aside>
            <div>
            <h5>Shopping Cart</h5>
                    <ul>
                      {cart.map((item) => (
                        <li key={item.id}>
                         <span>{item.name}</span><span>&nbsp;&nbsp;</span>
                         <span>{item.quantity}</span>
                         <span>&nbsp;&nbsp;</span>
                          <span><button onClick={() => handleUpdateQuantity(item.id, "decrement")}>&nbsp;-&nbsp;</button></span>
                          <span>&nbsp;&nbsp;</span> 
                          <span><button onClick={() => handleUpdateQuantity(item.id, "increment")}>&nbsp;+&nbsp;</button></span>                          
                        </li>
                      ))}
                      {!cart.length && <li>Cart is empty</li>}
                    </ul>

            </div>
            <hr />
            <h5>Total: &pound;&nbsp;{calculateTotal(cart).toFixed(2)}</h5>
          </aside>
          <PaypalForm></PaypalForm>
          <div id="homebar">
                <a href="#titlepage">Home</a>
            </div>
        </div>
        <div className="bg-right"></div>
      </div>
    </div>
  );
}
