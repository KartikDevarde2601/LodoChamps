import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { colors, typography } from "app/theme"
import { Plot } from "app/components/Plot"

export interface PocketProps {
  /**
   * An optional style override useful for padding & margin.
   */
  player: any
  color: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Pocket = React.memo(function Pocket(props: PocketProps) {
  const { player, color } = props
  const $styles = [$container, { backgroundColor: color }]
  const $childFramewithColor = [$childFrame]

  return (
    <View style={$styles}>
      <View style={$childFramewithColor}>
        <View style={$flexRow}>
          <Plot pieceNo={0} player={player} color={color} />
          <Plot pieceNo={0} player={player} color={color} />
        </View>
        <View style={$flexRow}>
          <Plot pieceNo={0} player={player} color={color} />
          <Plot pieceNo={0} player={player} color={color} />
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  borderWidth: 0.4,
  justifyContent: "center",
  height: "100%",
  width: "40%",
}

const $childFrame: ViewStyle = {
  alignSelf: "center",
  backgroundColor: "white",
  width: "70%",
  height: "70%",
  padding: 15,
  borderWidth: 0.4,
  justifyContent: "space-between",
}

const $flexRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "40%",
  paddingHorizontal: 4,
}
