import Counter from "./screens/Counter";
import Home from "./screens/Home";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigations";

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

  const handler = (e) => {
    if (e.key == "ArrowUp") {
      return countUp();
    }
    if (e.key == "ArrowDown") {
      return countDown();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
  }, []);

  return (
    <AppWrapper>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/simple/states"
          element={
            <Counter
              count={count}
              upFn={countUp}
              downFn={countDown}
              resetFn={countReset}
            />
          }
        />
      </Routes>
    </AppWrapper>
  );
}

export default App;
