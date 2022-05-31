import React from "react";
import styled from "styled-components";

import "modern-css-reset/dist/reset.min.css";
import GlobalStyles from "../styles";

const Main = styled.main``;

const H1 = styled.h1`
  font-size: 1rem;
`;

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <title>Home Page</title>
        <H1>Hello World</H1>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </Main>
    </>
  );
};

export default IndexPage;
