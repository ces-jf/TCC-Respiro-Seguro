import { useState, useEffect } from "react";
import { View } from "react-native";
import { RadioButton as RadioButtonPaper, Text } from "react-native-paper";

export default function RadioButton({ childreToParetent, pergunta, yes, no }) {
  const [checkd, setChecked] = useState();

  useEffect(() => {
    console.log(`Filho: ${checkd}`);
  }, [checkd]);

  return (
    <RadioButtonPaper.Group
      onValueChange={(newValue) => {
        setChecked(newValue);
        if (checkd !== undefined) {
          childreToParetent(checkd);
        }
      }}
      value={checkd}
    >
      <Text>{pergunta}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButtonPaper value={yes} />
        <Text>Sim</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButtonPaper value={no} />
        <Text>Não</Text>
      </View>
    </RadioButtonPaper.Group>
  );
}
