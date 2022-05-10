import { GameType } from "@alphabet/types/app";
import { Button, Text, View } from "react-native";

import { styles } from "./index.style";

interface IProps {
  words: Array<string>,
  setType(type: GameType): void
}

export default function End(props: IProps) {
  return (
    <View>
      <Text style={styles.gameEnded}>Игра окончена</Text>
      {props.words.length !== 0 && (
        <View style={styles.newWords}>
          <Text>Слова которые вы смогли придумать</Text>
          {props.words.map((word, index) => (
            <View style={styles.newWordsWrapper} key={index}>
              <Text style={styles.newWordsItem}>{word}</Text>
            </View>
          ))}
        </View>
      )}
      <View style={styles.newGame}>
        <Button title="Давай по новой" onPress={() => props.setType(GameType.START)} />
      </View>
    </View>
  );
}
