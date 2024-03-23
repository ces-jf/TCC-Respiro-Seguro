import { React } from "react";

import { ImageBackground, View } from "react-native";
import { Button, Text } from "react-native-paper";
import style from "./style";

export default function Home({ navigation }) {
  const uri = require("../../../assets/logo_transparente.png");
  return (
    <View style={style.header}>
      <ImageBackground source={uri} style={style.image}>
        <Text style={style.text}>Bem vindo!</Text>
        <Text style={style.text}>Respiro Seguro</Text>
        <Button
          style={style.botao}
          buttonColor="#fbc02d"
          mode="contained"
          onPress={() => navigation.navigate("Questions")}
        >
          Inicia diagnóstico
        </Button>
      </ImageBackground>
    </View>
  );
}
