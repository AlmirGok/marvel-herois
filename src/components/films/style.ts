import styled from "styled-components/native";
import { colors, fontSizes, fontWeights } from "../../theme";

export const container = styled.View`
  flex: 1;
  background-color: red;
  width: 140px;
  height: 230px;
  border-radius: 16px;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
  border: solid 1px ${colors.white};
`;

export const image = styled.Image`
  width: 140px;
  height: 230px;
`;
