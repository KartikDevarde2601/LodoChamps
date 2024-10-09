import React, { FC } from "react"
import { TouchableOpacity, ViewStyle, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BackgroundWrapper, AutoImage, VerticalPath, HorizontalPath } from "app/components"
import MenuIcon from "../../assets/images/menu.png"
import { DeviceHeight, DeviceWidth } from "app/utils/constant/constant"
import { Dice, Pocket } from "app/components"
import { colors } from "app/theme"
import { plot1Data, plot2Data, plot3Data, plot4Data } from "app/utils/plotData"
import { MiddleSqure } from "app/components/MiddleSqure"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LodoBoardScreenProps extends AppStackScreenProps<"LodoBoard"> {}

export const LodoBoardScreen: FC<LodoBoardScreenProps> = function LodoBoardScreen() {
  // const navigation = useNavigation()

  return (
    <BackgroundWrapper>
      <TouchableOpacity style={$MenuIcon}>
        <AutoImage source={MenuIcon} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <View style={$container}>
        <View style={$flexrow}>
          <Dice color={colors.palette.diceGreen} />
          <Dice color={colors.palette.diceYellow} rotate={true} />
        </View>
        <View style={$boardContainer}>
          <View style={$plotContainer}>
            <Pocket player color={colors.palette.diceGreen} />
            <VerticalPath color={colors.palette.diceYellow} cells={plot2Data} />
            <Pocket player color={colors.palette.diceYellow} />
          </View>
          <View style={$pathContainer}>
            <HorizontalPath color={colors.palette.diceGreen} cells={plot1Data} />
            <MiddleSqure />
            <HorizontalPath color={colors.palette.diceBlue} cells={plot3Data} />
          </View>
          <View style={$plotContainer}>
            <Pocket player color={colors.palette.diceRed} />
            <VerticalPath color={colors.palette.diceRed} cells={plot4Data} />
            <Pocket player color={colors.palette.diceBlue} />
          </View>
        </View>
        <View style={$flexrow}>
          <Dice color={colors.palette.diceRed} />
          <Dice color={colors.palette.diceBlue} rotate={true} />
        </View>
      </View>
    </BackgroundWrapper>
  )
}

const $MenuIcon: ViewStyle = {
  position: "absolute",
  top: 60,
  left: 20,
}
const $container: ViewStyle = {
  alignSelf: "center",
  justifyContent: "center",
  height: DeviceHeight * 0.5,
  width: DeviceWidth,
}

const $flexrow: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
  alignSelf: "center",
  paddingHorizontal: 16,
}

const $boardContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  alignSelf: "center",
  padding: 5,
  backgroundColor: "gold",
}

const $plotContainer: ViewStyle = {
  width: "100%",
  height: "40%",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "pink",
}

const $pathContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "20%",
  backgroundColor: "#1E5162",
}
