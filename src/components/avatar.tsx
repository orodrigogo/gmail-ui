import { Image, ImageProps } from "react-native"

type AvatarProps = ImageProps & {}

export function Avatar({ ...rest }: ImageProps) {
  return (
    <Image
      className="w-8 h-8 rounded-full"
      source={{ uri: "https://github.com/orodrigogo.png" }}
      {...rest}
    />
  )
}
