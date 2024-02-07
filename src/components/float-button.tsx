import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap | boolean
}

export function FloatButton({ icon = false, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-5 right-5 flex-row gap-1 items-center"
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialIcons name="edit" color={colors.red[400]} size={22} />

      <Text className="font-subtitle text-red-400">Escrever</Text>
    </TouchableOpacity>
  )
}
