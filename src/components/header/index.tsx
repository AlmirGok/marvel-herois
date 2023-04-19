import Menu from "../../assets/icons/Menu.svg";
import Logo from "../../assets/icons/Logo.svg";
import Arrow from "../../assets/icons/arrow.svg";
import Search from "../../assets/icons/Search.svg";
import * as Box from "./style";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, Button } from "react-native";

export function HeaderHome() {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <>
      <Box.headerHome>
        <TouchableOpacity onPress={() => setSelectedButton(1)}>
          <Menu width="24" height="24" fill="none" />
        </TouchableOpacity>
        <Logo width="71" height="26" fill="none" />
        <TouchableOpacity>
          <Search width="24" height="24" fill="none" />
        </TouchableOpacity>
      </Box.headerHome>
      <Box.containerSideBar
        style={{
          animation: "1s",
          transition: "all 1s",
          width: selectedButton === 1 ? "100%" : 0,
        }}
      >
        <Box.contentSideBar></Box.contentSideBar>
        <Box.areaCloseSideBar
          style={{
            height: selectedButton === 1 ? "100%" : "0%",
          }}
          onPress={() => setSelectedButton(0)}
        ></Box.areaCloseSideBar>
      </Box.containerSideBar>
    </>
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
