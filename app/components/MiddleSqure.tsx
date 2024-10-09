import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { colors, typography } from "app/theme"
import { Svg, Polygon } from "react-native-svg"
import Fire from "../../assets/animation/firework.json"
import LottieView from "lottie-react-native"

export interface MiddleSqureProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const MiddleSqure = React.memo(function MiddleSqure(props: MiddleSqureProps) {
  const size = 300
  const { style } = props
  const $styles = [$container, { backgroundColor: "white" }, style]

  const [isFire, setIsFire] = React.useState(false)

  return (
    <View style={$styles}>
      {isFire && (
        <LottieView
          source={Fire}
          autoPlay
          loop
          speed={1}
          hardwareAccelerationAndroid={true}
          style={$LottieView}
        />
      )}

      <Svg height={size} width={size - 5}>
        <Polygon
          points={`0,0 ${size / 2},${size / 2} ${size},0`}
          fill={colors.palette.diceYellow}
        />
        <Polygon
          points={`${size},0 ${size},${size} ${size / 2},${size / 2}`}
          fill={colors.palette.diceBlue}
        />
        <Polygon
          points={`0,${size} ${size / 2},${size / 2} ${size},${size}`}
          fill={colors.palette.diceRed}
        />
        <Polygon points={`0,0 ${size / 2},${size / 2} 0,${size}`} fill={colors.palette.diceGreen} />
      </Svg>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "20%",
  overflow: "hidden",
  borderWidth: 0.8,
  borderColor: colors.palette.neutral800,
}

const $LottieView: ViewStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 1,
}
