import { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, ScrollView, View } from "react-native";
import {
  Button,
  Dialog,
  RadioButton as RadioButtonPaper,
  Surface,
  Text,
} from "react-native-paper";
import style from "./style";

export default function Questions({ navigation, route }) {
  const [valor, setValor] = useState();
  const [valor2, setValor2] = useState();
  const [valor3, setValor3] = useState();
  const [valor4, setValor4] = useState();
  const [valor5, setValor5] = useState();
  const [valor6, setValor6] = useState();
  const [valor7, setValor7] = useState();
  const [valor8, setValor8] = useState();
  const [valor9, setValor9] = useState();
  const [valor10, setValor10] = useState();
  const [valor11, setValor11] = useState();
  const [valor12, setValor12] = useState();
  const [valor13, setValor13] = useState();
  const [valor14, setValor14] = useState();
  const [valor15, setValor15] = useState();
  const [total, setTotal] = useState();
  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);
  const uri = require("../../../assets/logo_transparente.png");
  useEffect(() => {
    somaTotal();
  }, [
    valor,
    valor2,
    valor3,
    valor4,
    valor5,
    valor6,
    valor7,
    valor8,
    valor9,
    valor10,
    valor11,
    valor12,
    valor13,
    valor14,
    valor15,
  ]);

  const somaTotal = () => {
    let soma =
      valor +
      valor2 +
      valor3 +
      valor4 +
      valor5 +
      valor6 +
      valor7 +
      valor8 +
      valor9 +
      valor10 +
      valor11 +
      valor12 +
      valor13 +
      valor14 +
      valor15;

    if (soma !== undefined) setTotal(soma);
  };

  return (
    <>
      <ImageBackground source={uri} style={style.image}>
        <SafeAreaView style={style.container}>
          <ScrollView>
            <Text style={style.title}>Avaliação GDS</Text>
            <View style={style.header}>
              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor(newValue);
                  }}
                  value={valor}
                >
                  <Text style={style.text}>
                    1-Está satisfeito(a) com sua vida?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor2(newValue);
                  }}
                  value={valor2}
                >
                  <Text style={style.text}>
                    2-Interrompeu muitas de suas atividades?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor3(newValue);
                  }}
                  value={valor3}
                >
                  <Text style={style.text}>3-Acha sua vida vazia?</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor4(newValue);
                  }}
                  value={valor4}
                >
                  <Text style={style.text}>4-Aborrece-se com frequência?</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor5(newValue);
                  }}
                  value={valor5}
                >
                  <Text style={style.text}>
                    5-Sente-se bem com a vida na maior parte do tempo?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor6(newValue);
                  }}
                  value={valor6}
                >
                  <Text style={style.text}>
                    6-Teme que algo ruim lhe aconteça?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor7(newValue);
                  }}
                  value={valor7}
                >
                  <Text style={style.text}>
                    7-Sente-se alegre a maior parte do tempo?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>
              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor8(newValue);
                  }}
                  value={valor8}
                >
                  <Text style={style.text}>
                    8-Sente-se desamparado com frequência?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor9(newValue);
                  }}
                  value={valor9}
                >
                  <Text style={style.text}>
                    9-Prefere ficar em casa a sair e fazer coisas novas?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>
              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor10(newValue);
                  }}
                  value={valor10}
                >
                  <Text style={style.text}>
                    10-Acha que tem mais problemas de memória que outras
                    pessoas?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor11(newValue);
                  }}
                  value={valor11}
                >
                  <Text style={style.text}>
                    11-Acha que é maravilhoso estar vivo(a)?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor12(newValue);
                  }}
                  value={valor12}
                >
                  <Text style={style.text}>12-Sente-se inútil?</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor13(newValue);
                  }}
                  value={valor13}
                >
                  <Text style={style.text}>
                    13-Sente-se cheio(a) de energia?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor14(newValue);
                  }}
                  value={valor14}
                >
                  <Text style={style.text}>14-Sente-se sem esperança?</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <Surface style={style.surface} elevation={5}>
                <RadioButtonPaper.Group
                  onValueChange={(newValue) => {
                    setValor15(newValue);
                  }}
                  value={valor15}
                >
                  <Text style={style.text}>
                    15-Acha que os outros têm mais sorte que você?
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButtonPaper value={1} color="#fbc02d" />
                    <Text style={style.text}>Sim</Text>
                    <RadioButtonPaper value={0} color="#fbc02d" />
                    <Text style={style.text}>Não</Text>
                  </View>
                </RadioButtonPaper.Group>
              </Surface>

              <View style={{ alignItems: "center" }}>
                <Button
                  style={{ marginBottom: 50 }}
                  buttonColor="#fbc02d"
                  mode="contained"
                  onPress={() => {
                    if (total === undefined || isNaN(total)) showDialog();
                    else navigation.navigate("Answers", { answer: total });
                  }}
                >
                  Avançar
                </Button>
              </View>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Anteção</Dialog.Title>
                <Dialog.Content>
                  <Text variant="bodyMedium">
                    Falta responder alguma(s) perguntas!
                  </Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Fechar</Button>
                </Dialog.Actions>
              </Dialog>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
