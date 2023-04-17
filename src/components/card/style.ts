import styled from "styled-components/native";
import { colors, fontSizes } from "../../theme";

export const Container = styled.View`
  width: 140px;
  flex-direction: row;
  display: flex;
  height: 230px;
  border-radius: 16px;
  margin-right: 15px;
  position: relative;
  overflow: hidden;
  margin-right: 10px;
  margin-left: 10px;
`;

export const image = styled.Image`
  width: 140px;
  height: 230px;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 15px;
  position: absolute;
  margin-top: 0px;
`;
export const imageShadow = styled.Image`
  width: 140px;
  height: 230px;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 15px;
  position: absolute;
  margin-top: 0px;
  z-index: 1;
`;

export const contentText = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  display: flex;
  padding: 15px;
  z-index: 2;
`;
export const TextName = styled.Text`
  width: 100%;
  display: flex;
  font-size: 10px;
  color: ${colors.white};
  padding-top: 5px;
`;

export const TextNameHero = styled.Text`
  width: 100%;
  display: flex;
  font-size: 20px;
  color: ${colors.white};
  font-weight: 800;
  padding-top: 5px;
`;
