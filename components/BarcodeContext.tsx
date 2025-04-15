import React, { createContext, useContext, useState } from 'react';

type BarcodeItem = {
  code: string;
  count: number;
};

type BarcodeContextType = {
  barcodes: BarcodeItem[];
  addBarcode: (code: string) => void;
  removeBarcode: (code: string) => void;
};

const BarcodeContext = createContext<BarcodeContextType | undefined>(undefined);

export const BarcodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [barcodes, setBarcodes] = useState<BarcodeItem[]>([]);

  const removeBarcode = (code: string) => {
    setBarcodes(prev => prev.filter(item => item.code !== code));
  };


  const addBarcode = (code: string) => {
    setBarcodes(prev => {
      const existing = prev.find(item => item.code === code);
      if (existing) {
        return prev.map(item =>
          item.code === code ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prev, { code, count: 1 }];
      }
    });
  };

  return (
    <BarcodeContext.Provider value={{ barcodes, addBarcode, removeBarcode }}>
      {children}
    </BarcodeContext.Provider>
  );
};

export const useBarcodeContext = () => {
  const context = useContext(BarcodeContext);
  if (!context) {
    throw new Error('useBarcodeContext must be used within a BarcodeProvider');
  }
  return context;
};
