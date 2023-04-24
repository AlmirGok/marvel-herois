import { FlatList, Text, TouchableOpacity, View } from "react-native";
import * as S from "./style";
import { HeaderHome } from "../../components/header";
import { Categories } from "../../components/categories";
import { CardCharacters, CardComics } from "../../components/cards";

import { Component, useEffect, useState } from "react";

export function Home({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [comics, setComics] = useState([]);

  const timeStamp = "1681411983";
  const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
  const md5 = "9c19027d3adbe716fd172eb230c5a63e";

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(" 🟩 Personagens", jsonParsed.data.results[0], "🟥");
        setMovies(jsonParsed.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(
          " 🟩 Histórias em quadrinhos",
          jsonParsed.data.results[0].prices[0].price,
          "🟥"
        );
        setComics(jsonParsed.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderItem = ({ item }) => {
    return (
      <CardCharacters
        name={item.name}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  const renderItemComics = ({ item }) => {
    return (
      <CardComics
        title={item.title}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
        pageCount={item.pageCount}
        value={item.prices[0].price}
      />
    );
  };

  const keyExtractor = (item) => item.id.toString();
  return (
    <S.container>
      <HeaderHome />
      <S.containerScroll>
        <S.contentText>
          <S.textH5 className="text-center">
            Bem vindo ao Marvel Heroes
          </S.textH5>
          <S.textH1 className="text-center">Escolha o seu personagem</S.textH1>
        </S.contentText>
        <Categories />

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Heróis</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>

          <FlatList
            horizontal
            data={movies}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
          />
        </S.contentList>

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Histórias em quadrinhos</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          <FlatList
            horizontal
            data={comics}
            renderItem={renderItemComics}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
          />
        </S.contentList>

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Anti-heróis</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
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
        </S.contentList>
      </S.containerScroll>
    </S.container>
  );
}
