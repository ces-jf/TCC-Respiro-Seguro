import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import style from "./style";

export default function Respostas({ navigation, route }) {
  const { resposta } = route.params;
  return (
    <View style={style.header}>
      <Text style={style.subtext}>Resultado Da Avaliação:</Text>
      {resposta < 6 && <Text style={style.text}>Normal</Text>}
      {resposta >= 6 && resposta <= 10 && (
        <Text style={style.textLeve}>Depressão Leve</Text>
      )}
      {resposta >= 11 && <Text style={style.textSevera}>Depressão Severa</Text>}
      <Text style={style.text}>Pontos Na Escala GDS</Text>
      <Text style={style.circle}>{resposta}</Text>
      <View style={style.button}>
        <Button mode="contained" onPress={() => navigation.navigate("Home")}>
          Finalizar
        </Button>
      </View>
    </View>
  );
}
