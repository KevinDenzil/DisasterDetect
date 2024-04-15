import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Resource = () => {
  return (
    <View style={styles.iphone13144}>
      <Text style={[styles.supplies, styles.suppliesTypo]}>Supplies</Text>
      <View style={[styles.iphone13144Child, styles.iphone13144Bg]} />
      <Text style={styles.hackstreet}>
        <Text style={styles.hack}> Hack</Text>
        <Text style={styles.street}>street</Text>
      </Text>
      <Image
        style={styles.menu1Icon}
        contentFit="cover"
        source={require("../assets/menu-1.png")}
      />
      <View style={[styles.iphone13144Item, styles.iphone13144Bg]} />
      <Image
        style={styles.iphone13144Inner}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={[styles.groceries, styles.suppliesTypo]}>Groceries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  suppliesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iphone13144Bg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  supplies: {
    top: 18,
    left: 78,
    fontSize: FontSize.size_21xl,
    width: 217,
    height: 50,
    color: Color.colorWhite,
  },
  iphone13144Child: {
    top: 0,
    left: 0,
    width: 390,
    height: 87,
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
  iphone13144Item: {
    top: 170,
    left: 23,
    borderRadius: 12,
    width: 344,
    height: 119,
  },
  iphone13144Inner: {
    top: 181,
    left: 39,
    borderRadius: 11,
    width: 101,
    height: 97,
    position: "absolute",
  },
  groceries: {
    top: 210,
    left: 168,
    fontSize: FontSize.size_13xl,
    textDecoration: "underline",
    color: Color.colorBlack,
    width: 156,
    height: 38,
  },
  iphone13144: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Resource;
