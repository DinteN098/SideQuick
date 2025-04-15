import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useBarcodeContext } from '@/components/BarcodeContext';
import Barcode from 'react-native-barcode-svg';

export default function ItemList() {
  const { barcodes, removeBarcode } = useBarcodeContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={barcodes}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.barcodeWrapper}>
              <Barcode value={item.code} format="EAN13" />
              <Text style={styles.countText}>x{item.count}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeBarcode(item.code)}
            >
              <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  barcodeWrapper: {
    alignItems: 'center',
  },
  countText: {
    fontSize: 14,
    marginTop: 4,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 6,
    borderRadius: 4,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
