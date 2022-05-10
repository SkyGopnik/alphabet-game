import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, View } from 'react-native';

import { GameType } from "@alphabet/types/app";

import Start from "@alphabet/components/Start";
import Progress from "@alphabet/components/Progress";
import End from "@alphabet/components/End";

export default function App() {
  const [type, setType] = useState<GameType>(GameType.START);
  const [text, setText] = useState("");
  const [words, setWords] = useState<Array<string>>([]);

  return (
    <View style={styles.container}>
      {type === GameType.START && (
        <Start
          {...{
            text,
            setType,
            setText
          }}
        />
      )}
      {type === GameType.PROGRESS && (
        <Progress
          {...{
            text,
            setType,
            setWords
          }}
        />
      )}
      {type === GameType.END && (
        <End
          {...{
            words,
            setType
          }}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
