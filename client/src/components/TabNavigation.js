import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import { Link } from "react-router-dom";

export default function TabBar({ links, value, onItemClick }) {
  return (
    <Bar>
      {links.map((link) => (
        <StyledLink to={`/${link.label}`} key={link.label}>
          <NavItem
            active={value === link.label}
            onClick={() => onItemClick(link.label)}
          >
            <link.Icon active={value === link.label} />
            <Label> {link.label}</Label>
          </NavItem>
        </StyledLink>
      ))}
    </Bar>
  );
}
TabBar.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
  onItemClick: PropTypes.func,
};

const Bar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.background};
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: ${(props) => (props.active ? colors.gradientOne : colors.primaryText)};
`;

const Label = styled.label`
  margin-top: 5px;
  text-transform: uppercase;
  font-size: 0.7rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
