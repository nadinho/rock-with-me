import styled from "@emotion/styled";
import { ButtonFull } from "./ButtonFull";

export const ButtonOutline = styled(ButtonFull)`
  border-left: 3px solid #00a8ff;
  border-right: 3px solid #ad00a4;
  background-image: linear-gradient(50deg, #00a8ff, #ad00a4),
    linear-gradient(50deg, #00a8ff, #ad00a4);
  background-size: 100% 3px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
`;
