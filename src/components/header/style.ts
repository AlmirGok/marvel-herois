import styled from "styled-components/native";
import { colors, fontSizes, fontWeights } from "../../theme";

export const headerHome = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100px;
  padding-top: 35px;
  padding-left: 23px;
  padding-right: 23px;
  z-index: 1;
`;

export const headerDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100px;
  padding-top: 35px;
  padding-left: 23px;
  padding-right: 23px;
  z-index: 1;
  background-color: ${colors.blackOpacity};
`;

export const containerSideBar = styled.View`
  display: flex;
  position: absolute;
  width: 0px;
  overflow: hidden;
  height: 100%;
  z-index: 2;
  flex-direction: row;
  animation: 1s;
  transition: all 1s;
`;

export const contentSideBar = styled.View`
  background-color: ${colors.white};
  width: 70%;
  height: 100%;
`;
export const areaCloseSideBar = styled.TouchableOpacity`
  background-color: ${colors.dark};
  opacity: 0.6;
  width: 30%;
  height: 100%;
`;
