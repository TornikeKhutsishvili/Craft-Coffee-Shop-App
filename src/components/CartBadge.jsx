import styled from "styled-components";
import { useContextApi } from "../contexts/ContextApi";
import root from "../rootStyle";

const CartBadgeContainer = styled.div`
  background-color: red;
  color: #ffffff;
  border-radius: ${root.borderRadius};
  box-shadow: ${root.shadow};
  width: max-content;
  padding: 0px 7px;
  font-size: 13px;
`;

const CartBadge = () => {
  const { cartItems } = useContextApi();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <CartBadgeContainer>{totalQuantity}</CartBadgeContainer>
    </>
  );
};

export default CartBadge;
