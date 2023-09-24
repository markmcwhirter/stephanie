// shopping cart code
import * as React from "react";
import PaypalForm from './PaypalForm';

const products = [
  { id: 1, name: "Finally Free", price: 15 },
  { id: 2, name: "Next Book", price: 15 },
  { id: 3, name: "Next Book", price: 15 }
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
      <div  className="flex-container">
        <div className="flex-child">
          <main>
            <section>
              <div>
                <ul className="products">
                  {products.map((product) => (
                    <li key={product.id}>
                      {product.name} - ${product.price}
                      <button
                        className="primary"
                        onClick={() => handleAddToCart(product.id)}>
                        Add to cart
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <hr />
              <aside>
                <div>
                  <h2>Shopping Cart</h2>
                    <ul>
                      {cart.map((item) => (
                        <li key={item.id}>
                          {item.name}
                          <div>
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, "decrement")
                              }
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, "increment")
                              }
                            >
                              +
                            </button>
                          </div>
                        </li>
                      ))}
                      {!cart.length && <li>Cart is empty</li>}
                    </ul>
                </div>
                <hr />
                <h3>Total: {calculateTotal(cart)}</h3>
              </aside>
              <PaypalForm></PaypalForm>
            </main>
          </div>
        </div>
      </div>
  );
}
