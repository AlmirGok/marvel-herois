import * as S from "./style";
import { FlatList } from "react-native";
import { HeaderDetails } from "../../components/header";
import { InfoDetails } from "../../components/infoDetails";
import { Films } from "../../components/films";
import PercentageBar from "../../components/percentageBar";

import { colors } from "../../theme";

import { DATA } from "./data";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export function DetailsCharacters() {
  const route = useRoute();
  const { id: charactersId } = route.params || {};

  const [characters, setCharacters] = useState({});
  const [movieImage, setMovieImage] = useState({});
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);

  const timeStamp = "1681411983";
  const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
  const md5 = "9c19027d3adbe716fd172eb230c5a63e";

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${charactersId}?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log("🟩", jsonParsed.data.results[0].comics.items, "🟥");
        setCharacters(jsonParsed.data.results[0]);
        setMovieImage(jsonParsed.data.results[0].thumbnail);
        setComics(jsonParsed.data.results[0].comics.items);
        setSeries(jsonParsed.data.results[0].series.items);
        setStories(jsonParsed.data.results[0].stories.items);
        setEvents(jsonParsed.data.results[0].events.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item }) => {
    return <Films name={item.name} />;
  };
  const keyExtractor = (item) => item.id;

  return (
    <S.container>
      <HeaderDetails />
      <S.imageBackground
        source={{
          uri: `${movieImage.path + "." + movieImage.extension}`,
        }}
      />
      <S.imageShadowBackground
        source={require("../../assets/shadowDetails.png")}
      />
      <S.containerScroll>
        <S.contentTextTop>
          <S.textNomeHero>{characters?.name} </S.textNomeHero>
        </S.contentTextTop>
        <S.infoDetails>
          <S.textDetailsInfo>{characters?.description}</S.textDetailsInfo>
        </S.infoDetails>

        <S.contentFilms>
          <S.textTitle>Quadrinhos</S.textTitle>
          <FlatList
            horizontal
            key={comics}
            data={comics}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </S.contentFilms>
        <S.contentFilms>
          <S.textTitle>Series</S.textTitle>
          <FlatList
            horizontal
            key={comics}
            data={series}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </S.contentFilms>
        <S.contentFilms>
          <S.textTitle>Histórias</S.textTitle>
          <FlatList
            horizontal
            key={comics}
            data={stories}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </S.contentFilms>
        <S.contentFilms>
          <S.textTitle>Eventos</S.textTitle>
          <FlatList
            horizontal
            key={comics}
            data={events}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </S.contentFilms>
      </S.containerScroll>
    </S.container>
  );
}
