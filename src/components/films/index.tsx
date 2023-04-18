import * as Box from "./style";

export function Films({ image, navigation }) {
  return (
    <Box.container>
      <Box.image source={{ uri: image }} alt="image" />
    </Box.container>
  );
}
