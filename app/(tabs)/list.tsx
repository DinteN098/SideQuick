import {Text, View, StyleSheet } from 'react-native';

export default function ListScreen(){
    //the whole page
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    //color of the background on the about page
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //flex of the space?
        justifyContent: 'center',
        //also where text goes
        alignItems: 'center',
    },

    //color of the "about screen"
    text: {
        color: '#000000',
    },
});