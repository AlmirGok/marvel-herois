import { FlatList, Text, TouchableOpacity, View } from "react-native";
import * as S from "./style";
import { HeaderHome } from "../../components/header";
import { Categories } from "../../components/categories";
import {
  CardCharacters,
  CardComics,
  CardEvents,
  CardSeries,
} from "../../components/cards";

import { Component, useEffect, useState } from "react";

export function Home({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const timeStamp = "1681411983";
  const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
  const md5 = "9c19027d3adbe716fd172eb230c5a63e";

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setCharacters(jsonParsed.data.results);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderItemCharacters = ({ item }) => {
    return (
      <CardCharacters
        name={item.name}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setComics(jsonParsed.data.results);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/events?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(
          " 🟩 Data de inicio ",
          jsonParsed.data.results[0].start,
          "🟥"
        );
        setEvents(jsonParsed.data.results);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderItemEventos = ({ item }) => {
    return (
      <CardEvents
        title={item.title}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/series?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(
          " 🟩 Data de inicio ",
          jsonParsed.data.results[0].title,
          "🟥"
        );
        setSeries(jsonParsed.data.results);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderItemSeries = ({ item }) => {
    return (
      <CardSeries
        title={item.title}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
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

        {/* <S.contentList>
            <S.contentTextCategory>
              <S.textCategoryTitle>Heróis</S.textCategoryTitle>
              <TouchableOpacity activeOpacity={0.9}>
                <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
              </TouchableOpacity>
            </S.contentTextCategory>

            <FlatList
              horizontal
              data={characters}
              renderItem={renderItemCharacters}
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
              <S.textCategoryTitle>Eventos</S.textCategoryTitle>
              <TouchableOpacity activeOpacity={0.9}>
                <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
              </TouchableOpacity>
            </S.contentTextCategory>
            <FlatList
              horizontal
              data={events}
              renderItem={renderItemEventos}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          </S.contentList> */}

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Series</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          {loading ? (
            <FlatList
              horizontal
              data={series}
              renderItem={renderItemSeries}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <S.Loading></S.Loading>
          )}
        </S.contentList>
      </S.containerScroll>
    </S.container>
  );
}
