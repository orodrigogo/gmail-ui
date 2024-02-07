import { View } from "react-native"

import { Input } from "@/components/input"
import { Avatar } from "@/components/avatar"
import { MenuButton } from "@/components/menu-button"

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar />
      </Input>
    </View>
  )
}
