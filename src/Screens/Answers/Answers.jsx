import React from "react";
import { ImageBackground, View } from "react-native";
import { Button, Text, Avatar } from "react-native-paper";
import style from "./style";

export default function Answers({ navigation, route }) {
  const { answer } = route.params;
  const uri = require("../../../assets/logo_transparente.png");
  return (
    <>
      <ImageBackground source={uri} style={style.image}>
        <View style={style.header}>
          <Text style={style.subtext}>Resultado Da Avaliação:</Text>
          {answer < 6 && <Text style={style.text}>Normal</Text>}
          {answer >= 6 && answer <= 10 && (
            <Text style={style.textLeve}>Depressão Leve</Text>
          )}
          {answer >= 11 && (
            <Text style={style.textSevera}>Depressão Severa</Text>
          )}
          <Text style={style.text}>Pontos Na Escala GDS</Text>
          <Avatar.Text
            color="white"
            size={100}
            label={answer}
            style={style.avatar}
          />
          <View style={style.button}>
            <Button
              buttonColor="#fbc02d"
              mode="contained"
              onPress={() => navigation.navigate("Home")}
            >
              Finalizar
            </Button>
            {answer >= 6 && (
              <Button
                style={{ marginStart: 5 }}
                buttonColor="#fbc02d"
                mode="contained"
                onPress={() => navigation.navigate("PartOne")}
              >
                Avançar
              </Button>
            )}
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
