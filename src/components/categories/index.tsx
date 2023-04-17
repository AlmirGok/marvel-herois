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
      <Box.ButtonHero>
        <Hero width="26" height="26" fill="none" />
      </Box.ButtonHero>
      <Box.ButtonVillain>
        <Villain width="26" height="26" fill="none" />
      </Box.ButtonVillain>
      <Box.ButtonAntihero>
        <Antihero width="26" height="26" fill="none" />
      </Box.ButtonAntihero>
      <Box.ButtonAlien>
        <Alien width="26" height="26" fill="none" />
      </Box.ButtonAlien>
      <Box.ButtonHuman>
        <Human width="26" height="26" fill="none" />
      </Box.ButtonHuman>
    </Box.Container>
  );
}
