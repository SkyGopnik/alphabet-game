import React from "react";
import { Button, Text, TextInput } from "react-native";

import { GameType } from "@alphabet/types/app";

import { styles } from "@alphabet/components/Start/index.style";

interface IProps {
  text: string,
  setType(type: GameType): void,
  setText(text: string): void
}

export default function Start(props: IProps) {
  return (
    <>
      <Text style={styles.title}>Для начала игры необходимо ввести любое слово!</Text>
      <TextInput
        style={styles.input}
        value={props.text}
        placeholder="Арбуз"
        onChangeText={(text) => props.setText(text)}
      />
      <Button
        title="Играть"
        disabled={props.text?.length === 0}
        onPress={() => props.setType(GameType.PROGRESS)}
      />
    </>
  );
}
