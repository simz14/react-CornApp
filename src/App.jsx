import Counter from "./Components/Counter";
import { useState } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 0;
  background-color: #1c1c1c;
  color: white;
`;

function App() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };
  const countReset = () => {
    setCount((prev) => (prev = 0));
  };

  return (
    <AppWrapper>
      <Counter
        count={count}
        upFn={countUp}
        downFn={countDown}
        resetFn={countReset}
      />
    </AppWrapper>
  );
}

export default App;
