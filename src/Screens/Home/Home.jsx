import { React, useEffect, useState } from "react";

import { View } from "react-native";
import Logo from "../../components/Logo/Logo";
import style from "./style";
import { Button, Tooltip, IconButton, Dialog, Text } from "react-native-paper";

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);

  const showDialog = () => setVisible(true);

  return (
    <View style={style.header}>
      <Text style={style.text}>Bem vindo!</Text>
      <Text style={style.text}>Respiro Seguro</Text>
      <Logo />
      <Button mode="contained" onPress={() => navigation.navigate("Perguntas")}>
        Inicia diagnóstico
      </Button>
      <Tooltip title="Selected Camera">
        <IconButton
          icon="information-outline"
          selected
          size={24}
          onPress={() => showDialog()}
        />
      </Tooltip>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Importante</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            O aplicativo deve ser usado por profissionais de saúde.
          </Text>
          <Text variant="bodyMedium">
            Não utilize o aplicativo para auto-diagnóstico.
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Fechar</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
