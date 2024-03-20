import { View, TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChange={setValue}
        secureTextEntry={secureTextEntry}
        fontFamily="American Typewriter"
      />
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
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
