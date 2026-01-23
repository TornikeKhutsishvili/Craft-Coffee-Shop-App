import styled from "styled-components";
import root from "../rootStyle";

const CartContainer = styled.div`
  background: ${root.colors.white};
  border-radius: ${root.borderRadius};
  box-shadow: ${root.shadow};
  padding: 20px;
`;

const Cart = ({ items }) => {
  return (
    <CartContainer>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>{i.title}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </CartContainer>
  );
};

export default Cart;
