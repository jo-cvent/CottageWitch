import { View, Image, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const icon = require("../assets/google-icon.png");
  const navigation = useNavigation();
  const onSignInPressed = () => {
    console.log("Sign in pressed");
    // validate user
    navigation.navigate("Home");
  };

  const onSignInWithGoogle = () => {
    console.log("Sign in google pressed");
    // validate user
    navigation.navigate("Home");
  };

  const onForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignup = () => {
    navigation.navigate("SignUp");
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
          onChangeText={(text) => setUsername(text)}
        />
        <CustomInput
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <CustomButton
          text={"Sign In"}
          onPress={onSignInPressed}
          type={"primary"}
        />
        <CustomButton
          text={" Sign In With Google"}
          icon={icon}
          onPress={onSignInWithGoogle}
          type={"primary"}
        />
        <CustomButton
          text={"Forgot Password?"}
          onPress={onForgotPassword}
          type={"secondary"}
        />
        <CustomButton
          text={"Don't have an account? Sign up!"}
          onPress={onSignup}
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
