import React, { Component, useState } from "react";
import { Home } from "./src/screens/home";
import { Details } from "./src/screens/details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StatusBar, View } from "react-native";
import { StatusBarStyle } from "react-native";

const Stack = createNativeStackNavigator();

//Importando a API

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="dark-content"
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
