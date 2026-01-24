import styled from "styled-components";

const PurchaseContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PurchaseContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const PurchaseText = styled.p`
  font-size: 40px;
  color: green;
`;

const Purchase = () => {
  return (
    <>
      <PurchaseContainer>
        <PurchaseContext>
          <PurchaseText>
            <i class="fa-solid fa-star"></i> Your Order is successfully
          </PurchaseText>
        </PurchaseContext>
      </PurchaseContainer>
    </>
  );
};

export default Purchase;
