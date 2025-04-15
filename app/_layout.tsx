import { Stack} from "expo-router";
import { BarcodeProvider } from "@/components/BarcodeContext";

export default function RootLayout() {
  return(
    //whole layout of app?

    <BarcodeProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
    </BarcodeProvider>

);
}
