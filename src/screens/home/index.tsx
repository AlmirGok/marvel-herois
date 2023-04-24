import { FlatList, Text, TouchableOpacity, View } from "react-native";
import * as Box from "./style";
import { HeaderHome } from "../../components/header";
import { Categories } from "../../components/categories";
import { Card } from "../../components/card";

import { DATA } from "./data";
import { Component, useEffect, useState } from "react";

export function Home({ navigation }) {
  const [movies, setMovies] = useState([]);

  const timeStamp = "1681411983";
  const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
  const md5 = "9c19027d3adbe716fd172eb230c5a63e";

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`
    )
      .then((response) => {
        console.log("==>", response.json);
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed.data);
        setMovies(jsonParsed.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderItem = ({ item }) => {
    console.log("=========>", item);
    return (
      <Card
        name={item.name}
        nameHero={""}
        image={item.thumbnail.path}
        id={item.id}
      />
    );
  };
  const keyExtractor = (item) => item.id.toString();
  return (
    <Box.container>
      <HeaderHome />
      <Box.containerScroll>
        <Box.contentText>
          <Box.textH5 className="text-center">
            Bem vindo ao Marvel Heroes
          </Box.textH5>
          <Box.textH1 className="text-center">
            Escolha o seu personagem
          </Box.textH1>
        </Box.contentText>
        <Categories />

        <Box.contentList>
          <Box.contentTextCategory>
            <Box.textCategoryTitle>Heróis</Box.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <Box.textCategoryViewAll>Ver tudo</Box.textCategoryViewAll>
            </TouchableOpacity>
          </Box.contentTextCategory>

          <FlatList
            horizontal
            data={movies}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
          />
        </Box.contentList>

        <Box.contentList>
          <Box.contentTextCategory>
            <Box.textCategoryTitle>Vilões</Box.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <Box.textCategoryViewAll>Ver tudo</Box.textCategoryViewAll>
            </TouchableOpacity>
          </Box.contentTextCategory>
          {/* <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                nameHero={item.nameHero}
                image={item.image}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          /> */}
        </Box.contentList>

        <Box.contentList>
          <Box.contentTextCategory>
            <Box.textCategoryTitle>Anti-heróis</Box.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <Box.textCategoryViewAll>Ver tudo</Box.textCategoryViewAll>
            </TouchableOpacity>
          </Box.contentTextCategory>
          {/* <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                nameHero={item.nameHero}
                image={item.image}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          /> */}
        </Box.contentList>
      </Box.containerScroll>
    </Box.container>
  );
}
