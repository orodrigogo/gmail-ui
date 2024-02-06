import { useState } from "react"
import {
  Text,
  View,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated"
import {
  GestureDetector,
  Gesture,
  FlatList,
} from "react-native-gesture-handler"

import { Appointment } from "@/components/appointment"
import { HOURS } from "@/utils/hours"

const CARD_HEIGHT = 62
const HEADER_HEIGHT = 174

export function Home() {
  const [hours, setHours] = useState<string[]>([])

  const startGestureY = useSharedValue(0)
  const endGestureY = useSharedValue(0)
  const contentOffset = useSharedValue(0)

  const startIndex = useSharedValue(0)
  const endIndex = useSharedValue(0)

  const gesture = Gesture.Pan()
    .activateAfterLongPress(200)
    .onStart((event) => {
      // Reseta para o tamanho da seleção.
      startIndex.value = 0
      endIndex.value = 0

      // Armazena a posição inicial.
      startGestureY.value = event.absoluteY + contentOffset.value

      // De inicio no end defino o tamanho de um card.
      endGestureY.value = event.absoluteY + CARD_HEIGHT + contentOffset.value
    })
    .onChange((event) => {
      const relativeStartY = startGestureY.value - HEADER_HEIGHT
      const relativeEndY = event.absoluteY - HEADER_HEIGHT + contentOffset.value

      startIndex.value = Math.floor(relativeStartY / CARD_HEIGHT)
      startGestureY.value = startIndex.value * CARD_HEIGHT + HEADER_HEIGHT + 10

      endIndex.value = Math.floor(relativeEndY / CARD_HEIGHT)
      endGestureY.value = endIndex.value * CARD_HEIGHT - 10
    })
    .onFinalize(() => {
      startGestureY.value = 0
      endGestureY.value = 0

      runOnJS(hourSelect)(startIndex.value, endIndex.value)
    })

  function hourSelect(startIndex: number, endIndex: number) {
    const selectedHours = HOURS.slice(startIndex + 1, endIndex + 1)
    setHours(selectedHours)
  }

  const selectedAnimated = useAnimatedStyle(() => ({
    top: startGestureY.value,
    height: (endIndex.value - startIndex.value) * CARD_HEIGHT,
    opacity: endGestureY.value > 0 ? 1 : 0,
  }))

  return (
    <View className="flex-1 bg-gray-900">
      <View className="bg-gray-800 h-44 justify-end">
        <View className="flex-row items-center px-8 mb-3">
          <MaterialIcons name="arrow-back-ios" color={colors.white} size={24} />

          <Text className="text-white font-subtitle text-2xl ml-6">
            fevereiro
          </Text>

          <MaterialIcons
            name="arrow-drop-down"
            color={colors.white}
            size={24}
          />

          <View className="flex-1 flex-row justify-end items-center gap-6">
            <MaterialIcons name="search" color={colors.white} size={24} />
            <MaterialIcons name="today" color={colors.white} size={24} />
            <Image
              source={{ uri: "https://github.com/orodrigogo.png" }}
              className="w-9 h-9 rounded-full"
            />
          </View>
        </View>

        <View className="w-20 h-20 items-center justify-center border-r-[0.5px] border-gray-600">
          <Text className="text-gray-400 text-sm font-subtitle">SEG.</Text>
          <Text className="text-white font-subtitle text-2xl">5</Text>
        </View>
      </View>

      <Animated.View
        className="absolute w-full ml-20 border-2 border-orange-500 rounded-md mr-4"
        style={selectedAnimated}
      />

      <GestureDetector gesture={gesture}>
        <FlatList
          data={HOURS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Appointment
              hour={item}
              onPress={() => setHours([item])}
              isSelected={hours.includes(item)}
            />
          )}
          contentContainerStyle={{ paddingLeft: 24 }}
          onScroll={(event) => {
            // Update scrollY value based on the FlatList's scroll position
            contentOffset.value = event.nativeEvent.contentOffset.y
            console.log(event.nativeEvent.contentOffset.y)
          }}
          scrollEventThrottle={16}
        />
      </GestureDetector>
    </View>
  )
}
