import styled from "styled-components";

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
const Title = styled.h1`
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #5e5df0;
  border-radius: 5px;
  border: none;
  margin: 5px;
  color: white;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const Counter = ({ count, upFn, downFn, resetFn }) => {
  return (
    <ContentWrapper>
      <Title>Counter</Title>
      <Count>{count}</Count>
      <ButtonWrapper>
        <Button onClick={upFn}>Buy one</Button>
        <Button onClick={downFn}>Eat one</Button>
        <Button onClick={resetFn}>Reset</Button>
      </ButtonWrapper>
    </ContentWrapper>
  );
};

export default Counter;
