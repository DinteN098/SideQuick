import {Text, View, StyleSheet } from 'react-native';

export default function AboutScreen(){
    //the whole page
    return (
        <View style={styles.container}>
            <Text style={styles.text}>1) Use the in app camera to scan a barcode</Text>
            <Text style={styles.text}>2) All barcodes will go to the "Item List"</Text>
            <Text style={styles.text}>3) </Text>
            <Text style={styles.text}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    //color of the background on the about page
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        //flex of the space?
        justifyContent: 'center',
        //also where text goes
        alignItems: 'center',
    },

    //color of the "about screen"
    text: {
        color: '#fff',
    },
});