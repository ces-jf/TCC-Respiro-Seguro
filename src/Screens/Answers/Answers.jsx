import React, { useState } from "react";
import { ImageBackground, View, ScrollView, SafeAreaView } from "react-native";
import {
  Button,
  Text,
  Avatar,
  Dialog,
  Portal,
  Tooltip,
  IconButton,
  Card,
} from "react-native-paper";
import style from "./style";

export default function Answers({ navigation, route }) {
  const { answer } = route.params;
  const uri = require("../../../assets/logo_transparente.png");
  const [visible, setVisible] = useState(true);
  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return (
    <>
      <ImageBackground source={uri} style={style.image}>
        <SafeAreaView style={style.container}>
          <ScrollView>
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

              {answer >= 6 && answer <= 10 && (
                <View>
                  <Card style={style.card}>
                    <Card.Content>
                      <Text style={style.cardText}>
                        {`Prevenção: \nAtravés da promoção da saúde mental, educando em escolas, locais de trabalho e comunidade para reduzir o estigma e aumentar a conscientização.\n`}
                      </Text>
                      <Text style={style.cardText}>
                        {`Identificação precoce: \nRealizar triagens regulares de saúde mental em ambientes de cuidado primários e de saúde mental, para identificar sintomas depressivos precocemente.\n`}
                      </Text>
                      <Text style={style.cardText}>
                        {`Identificação precoce: \nRealizar triagens regulares de saúde mental em ambientes de cuidado primários e de saúde mental, para identificar sintomas depressivos precocemente.\n`}
                      </Text>
                    </Card.Content>
                  </Card>
                </View>
              )}

              <View style={style.button}>
                <Button
                  buttonColor="#fbc02d"
                  mode="contained"
                  rippleColor="white"
                  onPress={() => navigation.navigate("Home")}
                >
                  Finalizar
                </Button>
                {answer >= 6 && (
                  <Button
                    style={{ marginStart: 5 }}
                    buttonColor="#fbc02d"
                    rippleColor="white"
                    mode="contained"
                    onPress={() => navigation.navigate("PartOne")}
                  >
                    Avançar
                  </Button>
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
