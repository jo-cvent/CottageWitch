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
    height: "12%",
    borderColor: colors.quinary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 2,
    marginVertical: 5,
  },
});

export default CustomInput;
