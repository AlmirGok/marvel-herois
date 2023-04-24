import { Text, View } from "react-native";
import * as S from "./style";
import React, { Component } from "react";

export function Films({ name }) {
  return (
    <S.container>
      <S.TextNameComics>{name}</S.TextNameComics>
    </S.container>
  );
}
