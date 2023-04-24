import * as S from "./style";
import { TouchableOpacity } from "react-native";
import Hero from "../../assets/icons/hero.svg";
import Villain from "../../assets/icons/villain.svg";
import Antihero from "../../assets/icons/antihero.svg";
import Alien from "../../assets/icons/alien.svg";
import Human from "../../assets/icons/human.svg";

export function Categories() {
  return (
    <S.Container>
      <S.ButtonHero activeOpacity={0.9}>
        <Hero width="26" height="26" fill="none" />
      </S.ButtonHero>
      <S.ButtonVillain activeOpacity={0.9}>
        <Villain width="26" height="26" fill="none" />
      </S.ButtonVillain>
      <S.ButtonAntihero activeOpacity={0.9}>
        <Antihero width="26" height="26" fill="none" />
      </S.ButtonAntihero>
      <S.ButtonAlien activeOpacity={0.9}>
        <Alien width="26" height="26" fill="none" />
      </S.ButtonAlien>
      <S.ButtonHuman activeOpacity={0.9}>
        <Human width="26" height="26" fill="none" />
      </S.ButtonHuman>
    </S.Container>
  );
}
