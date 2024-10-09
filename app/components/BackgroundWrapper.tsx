import * as React from "react"
import { StyleProp, TextStyle, ViewStyle, ImageBackground, SafeAreaView } from "react-native"
import { DeviceHeight, DeviceWidth } from "app/utils/constant/constant"
import BG from "../../assets/images/bg.jpg"
export interface BackgroundWrapperProps {
  /**
   * An optional style override useful for padding & margin.
   */
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BackgroundWrapper = function BackgroundWrapper(props: BackgroundWrapperProps) {
  const { children } = props
  const $styles = [$container]
  const $safeView = [$safeview]

  return (
    <ImageBackground source={BG} style={$styles} resizeMode="cover">
      <SafeAreaView style={$safeView}>{children}</SafeAreaView>
    </ImageBackground>
  )
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $safeview: TextStyle = {
  height: DeviceHeight,
  width: DeviceWidth,
  alignContent: "center",
  justifyContent: "center",
}
