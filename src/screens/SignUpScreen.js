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

export default function SignUpScreen() {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const icon = require("../assets/google-icon.png");

  const onSignUpPressed = () => {
    console.log("Sign Up pressed");
  };

  const onSignUpWithGoogle = () => {
    console.log("Sign Up google pressed");
  };

  const onSignIn = () => {
    console.log("signin");
  };

  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/LogoWithText.png")}
        style={styles.logo}
      />
      <View style={styles.container}>
        <CustomInput
          placeholder="username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="email"
          value={email}
          setValue={setEmail}
          secureTextEntry
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="confirm password"
          value={confirmation}
          setValue={setPasswordConfirmation}
          secureTextEntry
        />
        <CustomButton
          text={"Sign Up"}
          onPress={onSignUpPressed}
          type={"primary"}
        />
        <CustomButton
          text={" Sign Up With Google"}
          icon={icon}
          onPress={onSignUpWithGoogle}
          type={"primary"}
        />
        <CustomButton
          text={"Already have an account? Sign in!"}
          onPress={onSignIn}
          type={"secondary"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "40%",
    maxWidth: 300,
    maxHeight: 200,
    position: "absolute",
    marginTop: 100,
  },
  container: {
    width: "80%",
    alignItems: "center",
    marginTop: 350,
  },
});
