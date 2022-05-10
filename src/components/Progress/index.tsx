import { GameType } from "@alphabet/types/app";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

import { styles } from "./index.style";

interface IProps {
  text: string,
  setWords(words: Array<string>): void,
  setType(type: GameType): void
}

export default function Progress(props: IProps) {
  let timeout: NodeJS.Timer;

  const [activeLetter, setActiveLetter] = useState<number | null>(null);
  const [newWordLetters, setNewWordLetters] = useState<Array<string>>([]);

  const [seconds, setSeconds] = useState(30);

  const [newWords, setNewWords] = useState<Array<string>>([]);

  const wordLetters = props.text.split("");

  useEffect(() => {
    timeout = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds <= 0) {
      endGame();
    }

    return () => clearTimeout(timeout);
  }, [seconds]);

  const handleKeyboardClick = (index: number) => {
    const letter = props.text[index];

    const _newWordLetters = [...newWordLetters];

    if (activeLetter !== null) {
      _newWordLetters.splice(activeLetter, 1, letter);

      setActiveLetter(null);
    } else {
      _newWordLetters.push(letter);
    }

    setNewWordLetters(_newWordLetters);
  };

  const handleSave = () => {
    if (newWordLetters.length < 2) {
      return;
    }

    const _newWords = [...newWords];

    _newWords.push(newWordLetters.join(""));

    setSeconds(seconds + 5);

    setNewWords(_newWords);
    setNewWordLetters([]);
    setActiveLetter(null);
  };

  const removeWord = (index: number) => {
    const _newWords = [...newWords];

    _newWords.splice(index, 1);

    setNewWords(_newWords);
    setSeconds(seconds - 10);
  };

  const removeLetter = () => {
    if (activeLetter === null) {
      return;
    }

    const _newWordLetters = [...newWordLetters];

    _newWordLetters.splice(activeLetter, 1);

    setActiveLetter(null);
    setNewWordLetters(_newWordLetters);
  };

  const handleClear = () => {
    setActiveLetter(null);
    setNewWordLetters([]);
  };

  const endGame = () => {
    props.setWords(newWords);
    props.setType(GameType.END);
  };

  return (
    <View style={styles.progress}>
      <Text>Ваше слово: <Text style={styles.yourWord}>{props.text}</Text></Text>
      {newWords.length !== 0 && (
        <View style={styles.newWords}>
          <Text>Слова которые вы смогли придумать</Text>
          {newWords.map((word, index) => (
            <View style={styles.newWordsWrapper} key={index}>
              <Text style={styles.newWordsItem}>{word}</Text>
              <Text style={styles.newWordsRemove} onPress={() => removeWord(index)}>X</Text>
            </View>
          ))}
        </View>
      )}
      <View style={styles.spellWord}>
        <Text style={styles.description}>Вам нужно составить как можно больше слов используя буквы из этого слова</Text>
        <View style={styles.letters}>
          {newWordLetters.map((letter, index) => (
            <View
              style={[
                styles.lettersItem,
                activeLetter === index && styles.lettersItemActive
              ]}
              key={index}
              onTouchStart={() => setActiveLetter(index)}
            >
              <Text>{letter.toUpperCase()}</Text>
            </View>
          ))}
        </View>
        {newWordLetters.length !== 0 && (
          <View style={styles.letterActions}>
            {activeLetter !== null && (
              <Text style={styles.removeLetter} onPress={removeLetter}>Удалить букву</Text>
            )}
            <Text style={styles.letterClear} onPress={handleClear}>Очистить поле</Text>
          </View>
        )}
        <Text style={styles.timer}>Осталось: <Text style={styles.timerSeconds}>{seconds > 0 ? seconds : 0}</Text> секунд</Text>
      </View>
      <View>
        <Text style={styles.availableLetters}>Доступные вам буквы</Text>
        <View style={styles.letters}>
          {wordLetters.map((letter, index) => (
            <View
              style={styles.lettersItem}
              key={index}
              onTouchStart={() => handleKeyboardClick(index)}
            >
              <Text>{letter.toUpperCase()}</Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <View style={styles.button}>
          <Button
            title="Сохранить слово"
            onPress={handleSave}
          />
        </View>
        <Button
          title="Закончить игру"
          color="#E08D79"
          onPress={endGame}
        />
      </View>
    </View>
  );
}
