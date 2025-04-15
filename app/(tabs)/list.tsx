// components/ItemList.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useBarcodeContext } from '@/components/BarcodeContext';
import Barcode from 'react-native-barcode-svg';

export default function ItemList() {
  const { barcodes, removeBarcode } = useBarcodeContext();

  // Compute total count from all barcode items
  const totalCount = barcodes.reduce((sum, item) => sum + item.count, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scanned Items</Text>
      <Text style={styles.totalText}>Total Items: {totalCount}</Text>
      <FlatList
        data={barcodes}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.barcodeSection}>
              <Barcode value={item.code} format="EAN13" />
              <Text style={styles.codeText}>{item.code}</Text>
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
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  totalText: { fontSize: 18, marginBottom: 15, color: 'gray' },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  barcodeSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  codeText: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '600',
  },
  countText: {
    fontSize: 14,
    marginTop: 2,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 6,
    borderRadius: 4,
    marginLeft: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
