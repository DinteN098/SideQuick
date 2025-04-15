import {Text, View, StyleSheet } from 'react-native';

export default function AboutScreen(){
    //the whole page
    return (
        <View style={styles.container}>
            <View style={styles.instructionsContainer}>
                <View style={styles.instructionsContainer}>
                <Text style={styles.instructionText}>1. Use the in-app camera to scan a barcode</Text>
                <Text style={styles.instructionText}>2. All barcodes will go to the "Item List"</Text>
                <Text style={styles.instructionText}>3. You can delete any barcode from the "Item List"</Text>
                <Text style={styles.instructionText}>4. Once done, you can clear the barcodes from the "Item List"</Text>
                </View>
            </View>
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

    instructionsContainer: {
        padding: 20,
        alignItems: 'flex-start',
      },
      
      instructionText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 24,
      },
});