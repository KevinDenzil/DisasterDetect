import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "./GLobalStyles";

const sos = () => {
  return (
    <View style={styles.iphone13146}>
      <Text style={[styles.dashboard, styles.dashboardFlexBox]}>Dashboard</Text>
      <View style={styles.iphone13146Child} />
      <Text style={[styles.hackstreet, styles.dashboardTypo]}>
        <Text style={styles.hack}> Hack</Text>
        <Text style={styles.street}>street</Text>
      </Text>
      <Image
        style={styles.menu1Icon}
        contentFit="cover"
        source={require("../assets/menu-1.png")}
      />
      <Image
        style={styles.iphone13146Item}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.emergencySos, styles.dashboardFlexBox]}>
        <Text style={styles.emergencySosTxtContainer}>
          <Text style={styles.emergency}>{`EMERGENCY
`}</Text>
          <Text style={styles.sos}>SOS</Text>
        </Text>
      </Text>
      <Image
        style={styles.iphone13146Inner}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  dashboardTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  dashboard: {
    left: 78,
    fontSize: FontSize.size_21xl,
    width: 217,
    height: 50,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 18,
  },
  iphone13146Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    width: 390,
    height: 87,
    position: "absolute",
  },
  hack: {
    color: Color.colorWhite,
  },
  street: {
    color: Color.colorTomato,
  },
  hackstreet: {
    top: 821,
    left: 274,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 116,
    height: 23,
    position: "absolute",
  },
  menu1Icon: {
    top: 27,
    left: 11,
    width: 37,
    height: 33,
    position: "absolute",
  },
  iphone13146Item: {
    top: 273,
    left: 32,
    width: 335,
    height: 335,
    position: "absolute",
  },
  emergency: {
    fontSize: FontSize.size_13xl,
  },
  sos: {
    fontSize: 96,
  },
  emergencySosTxtContainer: {
    width: "100%",
  },
  emergencySos: {
    top: 355,
    left: 95,
    fontWeight: "700",
    fontFamily: FontFamily.inriaSansBold,
    display: "flex",
    alignItems: "center",
    width: 200,
    height: 149,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 3,
      height: 4,
    },
    textShadowRadius: 4,
  },
  iphone13146Inner: {
    left: 325,
    width: 52,
    height: 52,
    top: 18,
    position: "absolute",
  },
  iphone13146: {
    backgroundColor: Color.colorGray,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default sos;
