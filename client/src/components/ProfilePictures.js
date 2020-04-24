import styled from "@emotion/styled";

const ProfilePicture = styled.img`
  border-radius: 100px;
  height: ${(props) => profilePictureSizes[props.size].height};
  width: ${(props) => profilePictureSizes[props.size].width};
`;

const profilePictureSizes = {
  extraSmall: { height: "16px", width: "16px" },
  small: { height: "30px", width: "30px" },
  medium: { height: "40px", width: "40px" },
  big: { height: "60px", width: "60px" },
  extraBig: { height: "100px", width: "100px" },
};

export default ProfilePicture;
