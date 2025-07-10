import { Stack } from "expo-router";

import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from hiding until fonts are loaded

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
}
