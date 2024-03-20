import { Text, StyleSheet, Pressable, Image } from "react-native";
import colors from "../config/colors";
export default function CustomButton({ onPress, text, type, icon }) {
  return (
    <Pressable onPress={onPress} style={[styles[`container_${type}`]]}>
      <Text style={styles[`text_${type}`]}>
        {icon && <Image style={styles.icon} source={icon} />}
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    alignItems: "flex-end",
  },
  container_primary: {
    width: "100%",
    borderColor: colors.quinary,
    backgroundColor: colors.tertiary,
    alignItems: "center",
    borderWidth: 1,
    fontFamily: "American Typewriter",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  container_secondary: {
    width: "100%",
    alignItems: "center",
    fontFamily: "American Typewriter",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  container_tertiary: {
    width: "100%",
    alignItems: "center",
    fontFamily: "American Typewriter",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: colors.secondary,
  },
  text_primary: {
    fontSize: 15,
    fontFamily: "American Typewriter",
    fontWeight: "bold",
  },
  text_secondary: {
    fontSize: 13,
    fontFamily: "American Typewriter",
  },
  text_tertiary: {
    fontSize: 15,
    color: colors.quinary,
    fontFamily: "American Typewriter",
    fontWeight: "bold",
  },
});
