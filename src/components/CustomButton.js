import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../config/colors";
export default function CustomButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    width: "100%",
    borderColor: colors.quinary,
    alignItems: "center",
    borderWidth: 1,
    fontFamily: "American Typewriter",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: "American Typewriter",
    fontWeight: "bold",
  },
});
