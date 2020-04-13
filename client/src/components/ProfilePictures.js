import styled from "@emotion/styled";

const ProfilePicture = styled.img`
  border-radius: 100px;
  height: ${(props) => profilePictureSizes[props.size].height};
`;

const profilePictureSizes = {
  small: { height: "16px" },
  medium: { height: "40px" },
  big: { height: "60px" },
};

export default ProfilePicture;
