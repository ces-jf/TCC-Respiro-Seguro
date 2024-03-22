import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  RadioButton as RadioButtonPaper,
  Surface,
  Text,
} from "react-native-paper";
import style from "./style";

export default function ParteOne({ navigation, route }) {
  const [valor, setValor] = useState();
  const [valor2, setValor2] = useState();
  const [valor3, setValor3] = useState();
  const [valor4, setValor4] = useState();
  const [valor5, setValor5] = useState();
  const [somatotal, setSomaTotal] = useState(0);

  useEffect(() => {
    soma();
  }, [valor, valor2, valor3, valor4, valor5]);

  const soma = () => {
    let soma = valor + valor2 + valor3 + valor4 + valor5;
    if (soma !== undefined) setSomaTotal(soma);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View>
          <Surface style={style.surface} elevation={1} mode="flat">
            <RadioButtonPaper.Group
              onValueChange={(newValue) => {
                setValor(newValue);
              }}
              value={valor}
            >
              <View style={style.view}>
                <RadioButtonPaper value={0} color="#fbc02d" />
                <Text style={style.text}>
                  Tenho um desejo de viver que é de moderado a forte
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={1} color="#fbc02d" />
                <Text style={style.text}>Tenho um desejo fraco de viver</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={2} color="#fbc02d" />
                <Text style={style.text}>Não tenho desejo de viver</Text>
              </View>
            </RadioButtonPaper.Group>
          </Surface>
        </View>

        <View>
          <Surface style={style.surface} elevation={5} mode="flat">
            <RadioButtonPaper.Group
              onValueChange={(newValue) => {
                setValor2(newValue);
              }}
              value={valor2}
            >
              <View style={style.view}>
                <RadioButtonPaper value={0} color="#fbc02d" />
                <Text style={style.text}>Não tenho desejo de morrer</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={1} color="#fbc02d" />
                <Text style={style.text}>Tenho um desejo fraco de morrer</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={2} color="#fbc02d" />
                <Text style={style.text}>
                  Tenho um desejo de morrer que é de moderado a forte
                </Text>
              </View>
            </RadioButtonPaper.Group>
          </Surface>
        </View>

        <View>
          <Surface style={style.surface} elevation={5} mode="flat">
            <RadioButtonPaper.Group
              onValueChange={(newValue) => {
                setValor3(newValue);
              }}
              value={valor3}
            >
              <View style={style.view}>
                <RadioButtonPaper value={0} color="#fbc02d" />
                <Text style={style.text}>
                  Minas razões para viveer pesam mais que minhas razões para
                  morrer
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={1} color="#fbc02d" />
                <Text style={style.text}>
                  Minhas razões para viver ou morrer são aproximadamente iguias
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={2} color="#fbc02d" />
                <Text style={style.text}>
                  Minhas razões para morrer pesam mais que minhas razões para
                  viver
                </Text>
              </View>
            </RadioButtonPaper.Group>
          </Surface>
        </View>

        <View>
          <Surface style={style.surface} elevation={5} mode="flat">
            <RadioButtonPaper.Group
              onValueChange={(newValue) => {
                setValor4(newValue);
              }}
              value={valor4}
            >
              <View style={style.view}>
                <RadioButtonPaper value={0} color="#fbc02d" />
                <Text style={style.text}>Não tenho desejo de me matar</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={1} color="#fbc02d" />
                <Text style={style.text}>
                  Tenho um desejo fraco de me matar
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={2} color="#fbc02d" />
                <Text style={style.text}>
                  Tenho um desejo de me matar que é de moderado a forte
                </Text>
              </View>
            </RadioButtonPaper.Group>
          </Surface>
        </View>

        <View>
          <Surface style={style.surface} elevation={5} mode="flat">
            <RadioButtonPaper.Group
              onValueChange={(newValue) => {
                setValor5(newValue);
              }}
              value={valor5}
            >
              <View style={style.view}>
                <RadioButtonPaper value={0} color="#fbc02d" />
                <Text style={style.text}>
                  Se estivesse numa situação de risco de vida, tentaria me
                  salvar
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={1} color="#fbc02d" />
                <Text style={style.text}>
                  Se estivesse numa situação de risco de vida, deixaria vida ou
                  morte ao acaso
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButtonPaper value={2} color="#fbc02d" />
                <Text style={style.text}>
                  Se estivesse numa situação de risco de vida, não tomaria as
                  medidas necessários para evitar a morte
                </Text>
              </View>
            </RadioButtonPaper.Group>
          </Surface>
        </View>
      </ScrollView>
    </>
  );
}
