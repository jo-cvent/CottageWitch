import { View, TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" fontFamily="American Typewriter" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: colors.quinary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {},
});

export default CustomInput;
