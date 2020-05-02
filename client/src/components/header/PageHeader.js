import styled from "@emotion/styled";
import React from "react";

export default function PageHeader(props) {
  return (
    <Header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        viewBox="0 0 20 20"
        stroke="url('#myGradient')"
        fill="url('#myGradient')"
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(110)">
            <stop offset="15%" stopColor="#00a8ff" />
            <stop offset="85%" stopColor="#ad00a4" />
          </linearGradient>
        </defs>
        <path d="M7,16a3,3,0,1,1-3-3A3,3,0,0,1,7,16Zm8-4a3,3,0,1,0,3,3A3,3,0,0,0,15,12Zm3-7.81a2,2,0,0,0-2.18-2l-7,.64A2,2,0,0,0,7,4.83V7L18,6ZM7,16V5.5M18,15V5.5" />
      </svg>
      <PageHeading {...props}></PageHeading>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 44px;
  margin-bottom: 20px;
  padding: 10px 20px 10px 20px;
  top: 0;
`;

const PageHeading = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 10px;
`;
