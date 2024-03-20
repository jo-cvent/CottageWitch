import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

export default function SignInScreen() {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/LogoWithText.png")}
        style={styles.logo}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
        <CustomInput
          placeholder="username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton />
      </View>
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
    width: "40%",
    maxWidth: 300,
    maxHeight: 200,
    position: "absolute",
  },
  container: {
    marginTop: 150,
    marginBottom: 50,
    width: "80%",
    height: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontFamily: "American Typewriter",
    fontWeight: "bold",
    color: colors.secondary,
    padding: 50,
    marginTop: 15,
  },
});
