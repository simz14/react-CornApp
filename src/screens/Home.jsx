import React from "react";
import styled from "styled-components";
import cornImage from "../assets/corn.gif";

const HomeWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const CornImage = styled.img`
  width: 650px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Corn is life 🌽</Title>
      <CornImage src={cornImage} alt="Corn giph" />
    </HomeWrapper>
  );
};

export default Home;
