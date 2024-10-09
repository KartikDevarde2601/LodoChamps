import * as React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { AutoImage } from "./AutoImage"
import { BackgroundImage } from "../utils/getImage"
import Svg from "react-native-svg"
import { Circle } from "react-native-svg"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated"

export interface PileProps {
  color: string
  player: any
  onPress: () => void
  pieceId: number
  cell: boolean
  style?: StyleProp<ViewStyle>
}

/**
 * Pile component displays a rotating hollow circle with an image in the center.
 */
export const Pile: React.FC<PileProps> = React.memo(function Pile(props: PileProps) {
  const { style, color } = props
  const $styles: StyleProp<ViewStyle> = [$container, style]
  const pileIcon = BackgroundImage.GetPileImage(color)

  // Shared value for rotation
  const rotation = useSharedValue(0)

  // Start the animation loop
  React.useEffect(() => {
    // withRepeat to continuously rotate the circle
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000, // Rotate 360 degrees in 1 second
        easing: Easing.linear, // Linear easing for smooth rotation
      }),
      -1, // Repeat indefinitely
      false, // No reverse animation
    )
  }, [rotation])

  // Animated style for rotation
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    }
  })

  return (
    <TouchableOpacity style={$styles}>
      <View style={$hollowCircle}>
        <Animated.View style={[{ ...$hollowCircle }, animatedStyle]}>
          <Svg width="18" height="18">
            <Circle
              cx="9"
              cy="9"
              r="8"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeDashoffset="0"
              fill="transparent"
            />
          </Svg>
        </Animated.View>
      </View>
      <AutoImage
        source={pileIcon}
        style={{ width: 32, height: 32, position: "absolute", bottom: "25%" }}
      />
    </TouchableOpacity>
  )
})

// Styles for the component
const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
}

const $hollowCircle: ViewStyle = {
  height: 15,
  width: 15,
  borderRadius: 25,
  position: "absolute",
  borderColor: "black",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
}
