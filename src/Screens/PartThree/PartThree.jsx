import React, { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, ScrollView, View } from "react-native";
import {
  Button,
  RadioButton as RadioButtonPaper,
  Surface,
  Text,
} from "react-native-paper";
import style from "./style";

export default function PartThree({ navigation, route }) {
  const [valor, setValor] = useState();
  const [valor2, setValor2] = useState();
  const [somaTotal, setSomaTotal] = useState(0);
  const { somaParte2 } = route.params;
  const uri = require("../../../assets/logo_transparente.png");

  useEffect(() => {
    soma();
  }, [valor, valor2]);

  const soma = () => {
    let valores = [valor, valor2, somaParte2];
    let soma = 0;
    if (valores.length !== 0) {
      soma = valores
        .filter((value) => value !== undefined)
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue + somaParte2
        );
    }
    if (soma !== undefined) setSomaTotal(soma);
  };

  return (
    <>
      <ImageBackground source={uri} style={style.image}>
        <SafeAreaView style={style.container}>
          <ScrollView>
            <View style={style.container}>
              <Text style={style.title}>Parte III</Text>
              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => setValor(newValue)}
                  value={valor}
                >
                  <View style={style.view}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Tentei suicídio uma vez</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={2} color="#fbc02d" />
                    <Text style={style.text}>
                      Tentei suicídio duas ou mais vezes
                    </Text>
                  </View>
                  {valor !== undefined && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Button
                        mode="text"
                        textColor="#fbc02d"
                        onPress={() => setValor()}
                      >
                        Limpar
                      </Button>
                    </View>
                  )}
                </RadioButtonPaper.Group>
              </Surface>
            </View>

            <View>
              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor2(newValue);
                  }}
                  value={valor2}
                >
                  <View style={style.view}>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>
                      Durante a última tentativa de suicídio, meu desejo de
                      morrer era fraco
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>
                      Tenho um desejo fraco de morrer
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={2} color="#fbc02d" />
                    <Text style={style.text}>
                      Tenho um desejo de morrer que é de moderado a forte
                    </Text>
                  </View>
                  {valor2 !== undefined && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Button
                        mode="text"
                        textColor="#fbc02d"
                        onPress={() => setValor2()}
                      >
                        Limpar
                      </Button>
                    </View>
                  )}
                </RadioButtonPaper.Group>
              </Surface>
            </View>

            <View style={{ alignItems: "center" }}>
              <Button
                style={{ marginBottom: 50 }}
                buttonColor="#fbc02d"
                mode="contained"
                onPress={() => navigation.navigate("Home")}
              >
                Avançar
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
