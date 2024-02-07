import { Pressable } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

export function MenuButton() {
  return (
    <Pressable>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  )
}
