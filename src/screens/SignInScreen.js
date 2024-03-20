import {View, Text, Image, StyleSheet, useWindowDimensions, TextPath, TSpan} from 'react-native';
import CustomInput from '../components/CustomInput';
import colors from '../config/colors';

export default function SignInScreen() {
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
   <Image source={require('../assets/Logo.png')} style={styles.logo}/>
            <View style={styles.container}>
            <Text style={styles.text}>Sign In Screen</Text>
            <CustomInput/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        paddingTop: 200,
    },
    logo: {
        width:'50%',
        maxWidth: 300,
        maxHeight: 200,  
        position: 'absolute',
    },
    container: {
        marginTop: 150,
        marginBottom: 50,
        height: 50,
        alignItems: 'center',
    },
    text: {  
        fontSize: 30,
        fontFamily: 'American Typewriter',
        fontWeight: 'bold',
        color: colors.primary,
    }
});
    