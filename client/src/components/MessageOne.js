import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";

export default function SpeechBubbleOne() {
  return (
    <Message>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam
    </Message>
  );
}

const Message = styled.div`
  background: linear-gradient(50deg, ${colors.gradientOne}, #364cf7);
  padding: 18px 20px;
  line-height: 1.625;
  font-size: 1rem;
  border-radius: 20px 20px 0 20px;
  margin-bottom: 30px;
  width: 80%;
`;
