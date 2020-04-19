import styled from "@emotion/styled";

export const IntroductionText = styled.p`
  font-size: 1em;
  animation: fadeIn 1500ms ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  animation-delay: 150ms;
`;
