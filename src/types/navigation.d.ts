import { DrawerNavigationOptions } from "@react-navigation/drawer"
import { IconNameType } from "@/components/drawer-button"

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameType
  isDivider?: boolean
  notifications?: number
  sectionTitle?: string
}
