import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import colors from "../../utils/colors";

export default function FloatingActionButton() {
  return (
    <div>
      <Link to="/newconcert">
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        </Button>
      </Link>
    </div>
  );
}

const Button = styled.button`
  position: fixed;
  cursor: pointer;
  bottom: 80px;
  right: 20px;
  z-index: 100;
  background-color: yellow;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border: none;
  outline: none;
  color: #fff;
  font-size: 36px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transform: rotate(45deg);
  }
`;
