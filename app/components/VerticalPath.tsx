import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { Cell } from "./Cell"

export interface VerticalPathProps {
  color?: string
  cells: Array<number>
  style?: StyleProp<ViewStyle>
}

/**
 * VerticalPath component renders a group of cells in a vertical column.
 */
export const VerticalPath = React.memo(function VerticalPath(props: VerticalPathProps) {
  const { style, cells, color } = props
  const $styles = [$container, style]

  // Group the cells in chunks of 3
  const groupcells = React.useMemo((): number[][] => {
    const group: number[][] = []
    for (let i = 0; i < cells.length; i += 3) {
      group.push(cells.slice(i, i + 3))
    }
    return group
  }, [cells])

  return (
    <View style={$styles}>
      <View style={$innerContainer}>
        {groupcells.map((group, groupIndex) => (
          <View key={`group=${groupIndex}`} style={$cells}>
            {group.map((id) => (
              <Cell key={`cell~${id}`} cell={true} id={id} color={color} />
            ))}
          </View>
        ))}
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "20%",
  height: "100%",
}

const $innerContainer: ViewStyle = {
  flexDirection: "column",
  width: "100%",
  height: "100%",
}

const $cells: ViewStyle = {
  flexDirection: "row",
  width: "33.33%",
  height: "16.7%",
}
