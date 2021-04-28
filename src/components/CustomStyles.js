import styled from "styled-components";
import removeButton from "../icons/cancel.svg";
import edditButton from "../icons/edit.svg";

export const RemoveButton = styled.button`
  padding-left: 20px;
  align-self: center;
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-image: url("${removeButton}");
  background-size: 100% 100%;
  border: 0;
  color: black;
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
`;

export const EditButton = styled.button`
  padding-left: 20px;
  align-self: center;
  width: 28px;
  height: 28px;
  margin-bottom: 3px;
  background-color: transparent;
  background-image: url("${edditButton}");
  background-size: 100% 100%;
  border: 0;
  color: black;
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
`;

export const size = {
  desktopL: "600px",
};
export const device = {
  desktopL: `(min-width: ${size.desktopL})`,
};
export const StyledLi = ({ className, children }) => (
  <li className={className}>{children}</li>
);

export const CustomStyledLi = styled(StyledLi)`
  poadding: 20px;
  background: white;
  display: flex;
  @media ${device.desktopL} {
    margin: 20px;
    border: 1px solid #d5d8df;
    border-radius: 4px;
  }
`;
