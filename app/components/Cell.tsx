import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Pile } from "./Pile"
import { SafeSpots, ArrowSpots, StartSpots } from "app/utils/plotData"
import { Icon } from "./Icon"

export interface CellProps {
  key: string
  cell: boolean
  id: number
  color?: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Cell = React.memo(function Cell(props: CellProps) {
  const { style, color, id } = props

  const isSafeSpot = React.useMemo(() => {
    return SafeSpots.includes(id)
  }, [id])

  const isArrowSpot = React.useMemo(() => {
    return ArrowSpots.includes(id)
  }, [id])

  const isStartSpot = React.useMemo(() => {
    return StartSpots.includes(id)
  }, [id])

  const $styles = [$container, { backgroundColor: isSafeSpot ? color : "white" }, style]

  return (
    <View style={$styles}>
      {/* <View style={$piceCotainer}>
        <Pile
          cell={true}
          color={colors.palette.diceGreen}
          pieceId={id}
          player="player"
          onPress={() => {}
        />
      </View> */}

      {isStartSpot && <Icon icon="star" style={{ width: 20, height: 20 }} />}
      {isArrowSpot && (
        <Icon
          icon="arrow"
          style={{
            width: 20,
            height: 20,
            transform: [
              {
                rotate: id == 38 ? "-90deg" : id == 25 ? "180deg" : id == 51 ? "-1800deg" : "90deg",
              },
            ],
          }}
        />
      )}
    </View>
  )
})

const $container: ViewStyle = {
  borderWidth: 1,
  width: "100%",
  height: "100%",
  borderColor: colors.palette.diceBoarder,
  justifyContent: "center",
  alignItems: "center",
}

const $piceCotainer: ViewStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  zIndex: 99,
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
