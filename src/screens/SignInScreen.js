import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import CustomInput from "../components/CustomInput";
import colors from "../config/colors";

export default function SignInScreen() {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/LogoWithText.png")}
        style={styles.logo}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
      </View>
      <CustomInput />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 30,
    paddingTop: 100,
  },
  logo: {
    width: "50%",
    maxWidth: 300,
    maxHeight: 200,
    position: "absolute",
  },
  container: {
    marginTop: 200,
    marginBottom: 50,
    height: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "American Typewriter",
    fontWeight: "bold",
    color: colors.primary,
    padding: 50,
  },
});
