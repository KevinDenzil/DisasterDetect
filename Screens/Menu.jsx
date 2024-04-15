import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.iphone13143}>
      <Text style={styles.dashboard}>Dashboard</Text>
      <View style={[styles.iphone13143Child, styles.iphone13143Position]} />
      <View style={[styles.iphone13143Item, styles.iphone13143Position]} />
      <Text style={styles.hackstreet}>
        <Text style={styles.hack}> Hack</Text>
        <Text style={styles.street}>street</Text>
      </Text>
      <Image
        style={styles.menu1Icon}
        contentFit="cover"
        source={require("../assets/menu-1.png")}
      />
      <Text style={[styles.maps, styles.sosTypo]}>Maps</Text>
      <Text style={[styles.supplies, styles.sosTypo]}>Supplies</Text>
      <Text style={[styles.sos, styles.sosTypo]}>sos</Text>
      <Text style={[styles.backToLogin, styles.sosTypo]}>back to login</Text>
      <View style={[styles.iphone13143Inner, styles.iphone13143Layout]} />
      <View style={[styles.lineView, styles.iphone13143Layout]} />
      <View style={[styles.iphone13143Child1, styles.iphone13143Layout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13143Position: {
    width: 390,
    backgroundColor: Color.colorGainsboro,
    top: 0,
    position: "absolute",
  },
  sosTypo: {
    height: 85,
    width: 268,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    left: 27,
    textAlign: "center",
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  iphone13143Layout: {
    height: 1,
    width: 242,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 40,
    position: "absolute",
  },
  dashboard: {
    top: 18,
    left: 78,
    width: 217,
    height: 50,
    textAlign: "center",
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iphone13143Child: {
    left: 0,
    height: 87,
  },
  iphone13143Item: {
    left: -67,
    height: 844,
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
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  menu1Icon: {
    top: 27,
    left: 11,
    width: 37,
    height: 33,
    position: "absolute",
  },
  maps: {
    top: 107,
  },
  supplies: {
    top: 202,
  },
  sos: {
    top: 317,
  },
  backToLogin: {
    top: 402,
  },
  iphone13143Inner: {
    top: 192,
  },
  lineView: {
    top: 307,
  },
  iphone13143Child1: {
    top: 402,
  },
  iphone13143: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default Menu;
