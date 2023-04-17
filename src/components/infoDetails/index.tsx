import * as Box from "./style";
import Age from "../../assets/icons/age.svg";
import Weight from "../../assets/icons/weight.svg";
import Height from "../../assets/icons/height.svg";
import Earth from "../../assets/icons/earth.svg";

export function InfoDetails({ age, weight, height, earth }) {
  return (
    <Box.container>
      <Box.buttonInfor>
        <Age width="26" height="26" fill="none" />
        <Box.textInfor>{age}</Box.textInfor>
      </Box.buttonInfor>
      <Box.buttonInfor>
        <Weight width="26" height="26" fill="none" />
        <Box.textInfor>{weight}</Box.textInfor>
      </Box.buttonInfor>
      <Box.buttonInfor>
        <Height width="26" height="26" fill="none" />
        <Box.textInfor>{height}</Box.textInfor>
      </Box.buttonInfor>
      <Box.buttonInfor>
        <Earth width="26" height="26" fill="none" />
        <Box.textInfor>{earth}</Box.textInfor>
      </Box.buttonInfor>
    </Box.container>
  );
}
