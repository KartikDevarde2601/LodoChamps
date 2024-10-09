import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { colors, typography } from "app/theme"
import { Pile } from "app/components/Pile"

export interface PlotProps {
  pieceNo: number
  player: any
  color: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Plot = React.memo(function Plot(props: PlotProps) {
  const { style, pieceNo, player, color } = props
  const $styles = [$container, { backgroundColor: color }]

  return (
    <View style={$styles}>
      <Pile player={player} color={color} />
    </View>
  )
})

const $container: ViewStyle = {
  width: "36%",
  height: "80%",
  borderRadius: 100,
  justifyContent: "center",
  alignItems: "center",
}
