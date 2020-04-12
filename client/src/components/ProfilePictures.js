import styled from "@emotion/styled";

const ProfilePicture = styled.img`
  border-radius: 100px;
  height: ${(props) => profilePictureSizes[props.size].height};
  width: ${(props) => profilePictureSizes[props.size].width};
`;

const profilePictureSizes = {
  small: { height: "16px", width: "16px" },
  medium: { height: "40px", width: "40px" },
  big: { height: "60px", width: "60px" },
};

export default ProfilePicture;
