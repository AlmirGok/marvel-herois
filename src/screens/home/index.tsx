import { FlatList, Text, TextBase, TouchableOpacity, View } from "react-native";
import * as Box from "./style";
import { HeaderHome } from "../../components/header";
import { Categories } from "../../components/categories";
import { Card } from "../../components/card";

import { DATA } from "./data";

export function Home({ navigation }) {
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
          />
        </Box.contentList>

        <Box.contentList>
          <Box.contentTextCategory>
            <Box.textCategoryTitle>Vilões</Box.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <Box.textCategoryViewAll>Ver tudo</Box.textCategoryViewAll>
            </TouchableOpacity>
          </Box.contentTextCategory>
          <FlatList
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
          />
        </Box.contentList>

        <Box.contentList>
          <Box.contentTextCategory>
            <Box.textCategoryTitle>Anti-heróis</Box.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <Box.textCategoryViewAll>Ver tudo</Box.textCategoryViewAll>
            </TouchableOpacity>
          </Box.contentTextCategory>
          <FlatList
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
          />
        </Box.contentList>
      </Box.containerScroll>
    </Box.container>
  );
}
