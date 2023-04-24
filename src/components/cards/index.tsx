import { TouchableOpacity } from "react-native";

import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

export function CardCharacters({ image, name, id }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsCharacters", { id })}
    >
      <S.Container>
        <S.image
          source={{
            uri: image,
          }}
          alt="image"
        />
        <S.imageShadow
          source={require("../../assets/shadow.png")}
          alt="image"
        />

        <S.contentText>
          <S.TextNameHero>{name}</S.TextNameHero>
        </S.contentText>
      </S.Container>
    </TouchableOpacity>
  );
}

export function CardComics({ image, title, id, pageCount, value }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsComics", { id })}
    >
      <S.Container>
        <S.image
          source={{
            uri: image,
          }}
          alt="image"
        />
        <S.imageShadow
          source={require("../../assets/shadow.png")}
          alt="image"
        />
        <S.contentInfo>
          <S.Value>${value}</S.Value>
        </S.contentInfo>
        <S.contentText>
          <S.TextNameTitle>{title}</S.TextNameTitle>

          <S.PageCount>{pageCount} Página</S.PageCount>
        </S.contentText>
      </S.Container>
    </TouchableOpacity>
  );
}
