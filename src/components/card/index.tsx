import { TouchableOpacity } from "react-native";

import * as Box from "./style";

export function Card({ image, name, nameHero, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Details")}
    >
      <Box.Container>
        <Box.image source={{ uri: image }} alt="image" />
        <Box.imageShadow
          source={require("../../assets/shadow.png")}
          alt="image"
        />

        <Box.contentText>
          <Box.TextName>{name}</Box.TextName>
          <Box.TextNameHero>{nameHero}</Box.TextNameHero>
        </Box.contentText>
      </Box.Container>
    </TouchableOpacity>
  );
}
