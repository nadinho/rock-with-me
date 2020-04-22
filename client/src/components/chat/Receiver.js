import styled from "@emotion/styled";
import colors from "../../utils/colors";
import React from "react";

export default function Receiver() {
  return (
    <Message>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren!
    </Message>
  );
}

const Message = styled.div`
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.additionalGradientTwo}
  );
  padding: 18px 20px;
  line-height: 1.625;
  font-size: 1rem;
  border-radius: 20px 20px 20px 0;
  margin-bottom: 30px;
  width: 80%;
  background: linear-gradient(50deg, ${colors.gradientTwo}, #bf0058);
`;
