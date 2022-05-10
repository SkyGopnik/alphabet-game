import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  progress: {
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  yourWord: {
    fontWeight: "bold"
  },
  description: {
    margin: 5,
    textAlign: "center"
  },
  spellWord: {
    display: "flex",
    alignItems: "center"
  },
  letters: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  lettersItem: {
    width: 25,
    height: 25,
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 20
  },
  lettersItemActive: {
    borderColor: "red"
  },
  button: {
    margin: 20
  },
  availableLetters: {
    textAlign: "center"
  },
  letterActions: {
    margin: 20
  },
  letterClear: {
    fontWeight: "bold",
    textAlign: "center"
  },
  removeLetter: {
    margin: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  newWords: {
    display: "flex",
    alignItems: "center"
  },
  newWordsWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  },
  newWordsItem: {
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20
  },
  newWordsRemove: {
    width: 20,
    height: 20,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 30
  },
  timer: {
    fontSize: 20
  },
  timerSeconds: {
    fontWeight: "bold"
  }
});
