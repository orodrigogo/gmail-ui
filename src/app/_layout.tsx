import "@/styles/global.css"

import { StatusBar } from "react-native"
import { Slot } from "expo-router"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <Slot />
    </SafeAreaProvider>
  )
}
