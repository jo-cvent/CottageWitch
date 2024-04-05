import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

export default function HomeScreen() {
  const bg = require("../assets/cottage.png");
  const navigation = useNavigation();
  const onHomePressed = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background} />
      <View style={styles.textContainer}>
        <Image source={require("../assets/witch.png")} style={styles.witch} />
        <Text style={styles.text}>That's okay!</Text>
        <CustomButton
          text={"Play on"}
          onPress={onHomePressed}
          type={"primary"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    bottom: 350,
    left: "50%",
    width: "50%",
    alignItems: "center",
  },
  text: {
    fontFamily: "American Typewriter",
    fontWeight: "bold",
    color: "white",
    backgroundColor: colors.secondary,
    borderWidth: 15,
    borderRadius: 15,
    borderColor: colors.secondary,
  },
  witch: {
    width: 200,
    height: 200,
  },
});
