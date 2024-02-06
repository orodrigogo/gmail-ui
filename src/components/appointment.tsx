import { View, Text, Pressable } from "react-native"
import { clsx } from "clsx"

type Props = {
  hour: string
  isSelected?: boolean
  onPress: () => void
}

export function Appointment({ hour, isSelected = false, onPress }: Props) {
  return (
    <View className="w-full">
      <View className="w-full h-16 flex-row relative">
        <Text className="text-gray-400 self-end mr-3 -bottom-2.5 right-2">
          {hour}
        </Text>

        <Pressable
          className={clsx(
            "flex-1 border-l-[0.5px] border-gray-600",
            isSelected && "bg-orange-500 "
          )}
          onPress={onPress}
        />
      </View>

      {!isSelected && (
        <View className="h-[0.5px] w-full bg-gray-600 absolute left-10" />
      )}
    </View>
  )
}
