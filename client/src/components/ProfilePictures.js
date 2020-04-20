import styled from "@emotion/styled";

const ProfilePicture = styled.img`
  border-radius: 100px;
  height: ${(props) => profilePictureSizes[props.size].height};
`;

const profilePictureSizes = {
  extraSmall: { height: "16px" },
  small: { height: "30px" },
  medium: { height: "40px" },
  big: { height: "60px" },
};

export default ProfilePicture;
