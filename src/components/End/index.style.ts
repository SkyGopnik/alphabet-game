import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gameEnded: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  newGame: {
    margin: 10
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
  }
});
