import React, { Component, useState } from "react";
import { Home } from "./src/screens/home";
import { DetailsCharacters } from "./src/screens/detailsCharacters";
import { DetailsComics } from "./src/screens/detailsComics";
import { DetailsEvents } from "./src/screens/detailsEvents";
import { DetailsSeries } from "./src/screens/detailsSeries";
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
          <Stack.Screen
            name="DetailsCharacters"
            component={DetailsCharacters}
          />
          <Stack.Screen name="DetailsComics" component={DetailsComics} />
          <Stack.Screen name="DetailsEvents" component={DetailsEvents} />
          <Stack.Screen name="DetailsSeries" component={DetailsSeries} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
