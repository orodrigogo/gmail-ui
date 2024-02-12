import { Drawer } from "expo-router/drawer"

import { CustomOptions } from "@/types/navigation"
import { DrawerContent } from "@/components/drawer-content"

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{ headerShown: false, drawerStyle: { width: "75%" } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Todas as Caixas de entrada",
            iconName: "all-inbox",
            notifications: 5,
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="inbox"
        options={
          {
            title: "Entrada",
            iconName: "inbox",
            notifications: 3,
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="starts"
        options={
          {
            title: "Com estrelas",
            iconName: "star-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconName: "schedule",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviado",
            iconName: "send",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconName: "note",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconName: "info-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="read"
        options={
          {
            title: "Lixeira",
            iconName: "label-important-outline",
            sectionTitle: "Marcadores",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="general"
        options={
          {
            title: "Lixeira",
            iconName: "label-important-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="new-marker"
        options={
          {
            title: "Criar novo",
            iconName: "add",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="feedback"
        options={
          {
            title: "Enviar feedback",
            iconName: "feedback",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="help"
        options={
          {
            title: "Ajuda",
            iconName: "help-outline",
          } as CustomOptions
        }
      />
    </Drawer>
  )
}
