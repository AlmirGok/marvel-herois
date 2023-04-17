import * as Box from "./style";
import { HeaderDetails } from "../../components/header";
import { InfoDetails } from "../../components/infoDetails";

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
        <Box.inforDetails>
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
        </Box.inforDetails>
      </Box.containerScroll>
    </Box.container>
  );
}
