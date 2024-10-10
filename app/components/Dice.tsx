import * as React from "react"
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Animated,
  Easing,
} from "react-native"
import { colors, typography } from "app/theme"
import { LinearGradient } from "react-native-linear-gradient"
import { BackgroundImage } from "../utils/getImage"
import LottieView from "lottie-react-native"
import { AutoImage } from "./AutoImage"
import DiceRoll from "../../assets/animation/diceroll.json"
import Arrow from "../../assets/images/arrow.png"
import { useAppSelector, useAppDispatch } from "app/store/store"
import { selectPlayerPiecesByNumber } from "app/store/gameFeature/selector"
import { newDiceNumber } from "app/store/gameFeature/gameSlice"

export interface DiceProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  color: string
  rotate?: boolean
  player?: number
  data?: any
}

/**
 * Describe your component here
 */
export const Dice = React.memo(function Dice(props: DiceProps) {
  const { style, color, rotate, player, data } = props

  const isDiceRolled = useAppSelector((state) => state.game.isDiceRolled)
  const diceNumber = useAppSelector((state) => state.game.diceNumber)
  const currentPlayerTurn = useAppSelector((state) => state.game.currentPlayerTurn)
  const playerPieces = useAppSelector((state) =>
    player !== undefined ? selectPlayerPiecesByNumber(state, player) : undefined,
  )
  const [diceRoling, setDiceRoling] = React.useState(false)

  const dispatch = useAppDispatch()

  const pileIcon = BackgroundImage.GetPileImage(color)
  const diceIcon = BackgroundImage.GetDiceImage(diceNumber)

  const $mainContainer = [$container, { transform: [{ scaleX: rotate ? -1 : 1 }] }]
  const arrowAnim = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    const animatedArrow = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(arrowAnim, {
            toValue: 10,
            duration: 600,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(arrowAnim, {
            toValue: 0,
            duration: 600,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start()
    }
    animatedArrow()
  }, [])

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

  const handleDicePress = async () => {
    const diceValue: number = Math.floor(Math.random() * 6) + 1
    setDiceRoling(true)
    await delay(800)
    dispatch(newDiceNumber(diceValue))
    setDiceRoling(false)
  }

  return (
    <View style={$mainContainer}>
      <View style={$pileBorder}>
        <LinearGradient
          style={$linarGradient}
          colors={colors.gradient.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View style={$pileContainer}>
            <AutoImage source={pileIcon} style={{ width: 35, height: 35 }} />
          </View>
        </LinearGradient>
      </View>

      <View style={$diceBorder}>
        <LinearGradient
          style={$diceGradient}
          colors={colors.gradient.diceGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View style={$diceContainer}>
            {currentPlayerTurn === player && !diceRoling && (
              <TouchableOpacity
                disabled={!isDiceRolled}
                activeOpacity={0.4}
                onPress={handleDicePress}
              >
                <AutoImage source={diceIcon} style={{ width: 55, height: 55 }} />
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>
      {currentPlayerTurn === player && !diceRoling && (
        <Animated.View style={{ transform: [{ translateX: arrowAnim }] }}>
          <AutoImage source={Arrow} style={{ width: 35, height: 35 }} />
        </Animated.View>
      )}

      {currentPlayerTurn === player && diceRoling && (
        <LottieView
          source={DiceRoll}
          style={$rolingDice}
          loop={false}
          autoPlay
          cacheComposition={true}
          hardwareAccelerationAndroid={true}
        />
      )}
    </View>
  )
})

const $rolingDice: ViewStyle = {
  height: 88,
  width: 88,
  zIndex: 99,
  top: -25,
  position: "absolute",
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
}

const $pileBorder: ViewStyle = {
  borderWidth: 3,
  borderColor: "#f0ce2c",
  borderRightWidth: 0,
}

const $diceBorder: ViewStyle = {
  borderWidth: 3,
  padding: 1,
  backgroundColor: "#aac8ab",
  borderRadius: 10,
  borderLeftWidth: 3,
  borderColor: "#aac8ab",
}

const $linarGradient = {}

const $diceGradient: ViewStyle = {
  borderWidth: 3,
  borderLeftWidth: 3,
  borderColor: "#f0ce2c",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
}

const $diceContainer: ViewStyle = {
  backgroundColor: "#e8c8c1",
  borderWidth: 1,
  borderRadius: 5,
  width: 55,
  height: 55,
  paddingHorizontal: 8,
  padding: 4,
  justifyContent: "center",
  alignItems: "center",
}

const $pileContainer: ViewStyle = {
  paddingHorizontal: 3,
}
