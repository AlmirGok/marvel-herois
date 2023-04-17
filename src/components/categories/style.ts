import styled from "styled-components/native";

import { colors, fontSizes } from "../../theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  display: flex;
  height: 100px;
  padding-top: 35px;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
`;

export const ButtonHero = styled.TouchableOpacity`
  width: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.hero};
`;
export const ButtonVillain = styled.TouchableOpacity`
  width: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.villain};
`;
export const ButtonAntihero = styled.TouchableOpacity`
  width: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.antihero};
`;
export const ButtonAlien = styled.TouchableOpacity`
  width: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.alien};
`;
export const ButtonHuman = styled.TouchableOpacity`
  width: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.human};
`;
