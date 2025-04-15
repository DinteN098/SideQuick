import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useBarcodeContext } from '@/components/BarcodeContext';

export default function ItemList() {
  const { barcodes, removeBarcode } = useBarcodeContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={barcodes}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.code} (x{item.count})
            </Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  item: { fontSize: 16 },
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
