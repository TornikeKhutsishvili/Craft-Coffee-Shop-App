import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContextApi } from "../contexts/ContextApi";
import root from "../rootStyle";

const CartContainer = styled.div`
  background-color: white;
  border-radius: ${root.borderRadius};
  box-shadow: ${root.shadow};
  padding: 20px;
  margin-bottom: 30px;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th {
    background-color: ${root.colors.accent};
    color: white;
    text-align: left;
    padding: 12px;
    border-radius: ${root.borderRadius} ${root.borderRadius} 0 0;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  tr:last-child td {
    border-bottom: none;
  }

  button {
    background-color: #ff5252;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #ff0000;
  }
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-total {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .cart-actions button {
    padding: 10px 20px;
    border: none;
    border-radius: ${root.borderRadius};
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .purchase-btn {
    background-color: ${root.colors.primary};
    color: white;
  }

  .purchase-btn:hover {
    background-color: ${root.colors.secondary};
  }

  .clear-cart-btn {
    margin-left: 10px;
    background-color: #f0f0f0;
    color: ${root.colors.text};
  }

  .clear-cart-btn:hover {
    background-color: #e0e0e0;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 30px;
  color: #777;

  i {
    font-size: 4rem;
    margin-bottom: 15px;
    color: ${root.colors.accent};
  }

  .back-to-shop {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: ${root.colors.primary};
    color: white;
    border-radius: ${root.borderRadius};
    text-decoration: none;
    &:hover {
      background-color: ${root.colors.secondary};
    }
  }
`;

const Cart = () => {
  const { cartItems, setCartItems, formatPrice } = useContextApi();
  const navigate = useNavigate();

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const purchaseProduct = () => {
    clearCart();
    navigate("/purchase");
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!cartItems || cartItems.length === 0)
    return (
      <CartContainer>
        <EmptyCart>
          <i className="fas fa-shopping-cart"></i>
          <strong>Cart is empty</strong>
          <p>Add some delicious coffee to your cart!</p>
          <Link to="/" className="back-to-shop">
            Back to shop
          </Link>
        </EmptyCart>
      </CartContainer>
    );

  return (
    <CartContainer>
      <CartTable>
        <thead>
          <tr>
            <th>Coffee</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((i) => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{formatPrice(i.price)}</td>
              <td>{i.quantity}</td>
              <td>{formatPrice(i.price * i.quantity)}</td>
              <td>
                <button onClick={() => removeItem(i.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </CartTable>

      <CartSummary>
        <div className="cart-total">Total: {formatPrice(total)}</div>
        <div className="cart-actions">
          <button className="purchase-btn" onClick={purchaseProduct}>
            Purchase
          </button>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </CartSummary>
    </CartContainer>
  );
};

export default Cart;
