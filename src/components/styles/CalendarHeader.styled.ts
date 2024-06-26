import styled from "styled-components";
import { themeColorTertiary } from "../../styles/themeColors";

export const Root = styled.div`
  padding-top: 60px;
  padding-inline: 28px;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
`;

export const StyledEditButton = styled.button<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorTertiary)};
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #8f9db6;
  border: none;
  background-color: transparent;
`;

export const StyledBackButton = styled.button<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorTertiary)};
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  background-color: transparent;
`;
