import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Button } from 'react-native';
import { useBarcodeContext } from '@/components/BarcodeContext'; // import the context hook

export default function BarcodeScanner() {
  const { addBarcode } = useBarcodeContext(); // use the context to get addBarcode function
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const hasScanned = useRef(false);

  function handleBarcodeScanned(scanningResult: BarcodeScanningResult): void {
    if (hasScanned.current) return;

    hasScanned.current = true;
    addBarcode(scanningResult.data); // Add barcode number to context

    console.log('Scanned Barcode:', scanningResult.data); // Log the barcode number

    Alert.alert(
      "Barcode scanned",
      scanningResult.data,
      [
        {
          text: "Okay",
          onPress: () => {
            hasScanned.current = false;
          }
        }
      ],
      { cancelable: false }
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{ barcodeTypes: ['ean13'] }}
        onBarcodeScanned={handleBarcodeScanned}
      >
        {/* Camera view */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  message: { textAlign: 'center', paddingBottom: 10 },
  camera: { flex: 1 },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: { fontSize: 18, fontWeight: 'bold', color: 'white' },
});
