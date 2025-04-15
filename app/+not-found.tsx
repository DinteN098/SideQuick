//when an error occurs this shows up and sends user to home screen

import { View, StyleSheet } from "react-native";

//when importating FROM different libraries use new line
import { Link, Stack } from 'expo-router'; 

export default function NotFoundScreen(){
    return(
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found'}}/>
            <View style={styles.container}>
                <Link href="/" style ={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff' ,
      },
});