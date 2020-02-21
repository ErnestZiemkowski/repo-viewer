import { Theme } from "./theme"

export const textColor = (name: keyof Theme["color"]["text"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.color.text[name]

export const breakpoint = (name: keyof Theme["breakpoint"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.breakpoint[name]
