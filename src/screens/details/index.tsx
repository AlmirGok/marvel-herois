import * as Box from "./style";
import { FlatList, Text, TextBase, TouchableOpacity, View } from "react-native";
import { HeaderDetails } from "../../components/header";
import { InfoDetails } from "../../components/infoDetails";
import { Films } from "../../components/films";
import PercentageBar from "../../components/percentageBar";

import { colors, fontSizes, fontWeights } from "../../theme";

import { DATA } from "./data";

export function Details({ navigation }) {
  return (
    <Box.container>
      <HeaderDetails />
      <Box.imageBackground source={require("../../assets/spiderMan.png")} />
      <Box.imageShadowBackground
        source={require("../../assets/shadowDetails.png")}
      />
      <Box.containerScroll>
        <Box.contentTextTop>
          <Box.textH5>Peter Parker </Box.textH5>
          <Box.textNomeHero>Homem Aranha</Box.textNomeHero>
        </Box.contentTextTop>
        <Box.infoDetails>
          <InfoDetails
            age={"30 anos"}
            weight={"78kg"}
            height={"1.80m"}
            earth={"Terra 616"}
          />
          <Box.textDetailsInfo>
            Em Forest Hills, Queens, Nova York, o estudante de ensino médio,
            Peter Parker, é um cientista orfão que vive com seu tio Ben e tia
            May. Ele é mordido por uma aranha radioativa em uma exposição
            científica e adquire a agilidade e a força proporcional de um
            aracnídeo. Junto com a super força, Parker ganha a capacidade de
            andar nas paredes e tetos. Através de sua habilidade nativa para a
            ciência, ele desenvolve um aparelho que o permitir lançar teias
            artificiais. Inicialmente buscando capitalizar suas novas
            habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma
            estrela de televisão.
          </Box.textDetailsInfo>
        </Box.infoDetails>
        <Box.contentAbility>
          <Box.textTitle>Habilidades</Box.textTitle>
          <PercentageBar
            height={15}
            backgroundColor={colors.hero}
            completedColor={colors.hero}
            percentage={"30%"}
            title={"Força"}
          />
          <PercentageBar
            height={15}
            backgroundColor={colors.villain}
            completedColor={colors.villain}
            percentage={"60%"}
            title={"Inteligência"}
          />
          <PercentageBar
            height={15}
            backgroundColor={colors.antihero}
            completedColor={colors.antihero}
            percentage={"10%"}
            title={"Agilidade"}
          />
          <PercentageBar
            height={15}
            backgroundColor={colors.alien}
            completedColor={colors.alien}
            percentage={"67%"}
            title={"Resistência"}
          />
          <PercentageBar
            height={15}
            backgroundColor={colors.human}
            completedColor={colors.human}
            percentage={"90%"}
            title={"Velocidade"}
          />
        </Box.contentAbility>

        <Box.contentFilms>
          <Box.textTitle>Filmes</Box.textTitle>

          <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => (
              <Films image={item.image} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </Box.contentFilms>
      </Box.containerScroll>
    </Box.container>
  );
}
