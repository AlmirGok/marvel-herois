import * as Box from "./style";
import { TouchableOpacity } from "react-native";
import Hero from "../../assets/icons/hero.svg";
import Villain from "../../assets/icons/villain.svg";
import Antihero from "../../assets/icons/antihero.svg";
import Alien from "../../assets/icons/alien.svg";
import Human from "../../assets/icons/human.svg";

export function Categories() {
  return (
    <Box.Container>
      <Box.ButtonHero activeOpacity={0.9}>
        <Hero width="26" height="26" fill="none" />
      </Box.ButtonHero>
      <Box.ButtonVillain activeOpacity={0.9}>
        <Villain width="26" height="26" fill="none" />
      </Box.ButtonVillain>
      <Box.ButtonAntihero activeOpacity={0.9}>
        <Antihero width="26" height="26" fill="none" />
      </Box.ButtonAntihero>
      <Box.ButtonAlien activeOpacity={0.9}>
        <Alien width="26" height="26" fill="none" />
      </Box.ButtonAlien>
      <Box.ButtonHuman activeOpacity={0.9}>
        <Human width="26" height="26" fill="none" />
      </Box.ButtonHuman>
    </Box.Container>
  );
}
