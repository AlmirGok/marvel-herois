import Menu from "../../assets/icons/Menu.svg";
import Logo from "../../assets/icons/Logo.svg";
import Arrow from "../../assets/icons/arrow.svg";
import Search from "../../assets/icons/Search.svg";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function HeaderHome() {
  return (
    <Box.headerHome>
      <TouchableOpacity>
        <Menu width="24" height="24" fill="none" />
      </TouchableOpacity>
      <Logo width="71" height="26" fill="none" />
      <TouchableOpacity>
        <Search width="24" height="24" fill="none" />
      </TouchableOpacity>
    </Box.headerHome>
  );
}

export function HeaderDetails() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Box.headerDetails>
      <TouchableOpacity onPress={handleGoBack}>
        <Arrow width="24" height="24" fill="none" />
      </TouchableOpacity>
    </Box.headerDetails>
  );
}

import * as Box from "./style";
