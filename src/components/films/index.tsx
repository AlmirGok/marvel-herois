import { Text, View } from "react-native";
import * as Box from "./style";
import React, { Component } from "react";

export function Films({ image, filmes }) {
  return (
    <Box.container>
      <Box.image source={{ uri: image }} alt="image" />
    </Box.container>
  );
}
{
  /*
class Films extends Component {
  render() {
    return (
      <View>
        <Box.image source={{ uri: this.props.data.imagem }} alt="image" />
        <Text>{this.props.data.nome}</Text>
      </View>
    );
  }
}

export default Films;
 */
}
