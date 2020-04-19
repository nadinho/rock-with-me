import styled from "@emotion/styled";

export const IntroductionHeading = styled.p`
  font-size: 1.25rem;
  animation-delay: 100ms;
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
`;
