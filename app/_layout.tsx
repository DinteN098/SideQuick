import { Stack} from "expo-router";

export default function RootLayout() {
  return(
    //whole layout of app?
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>);
}
