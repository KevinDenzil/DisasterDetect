// import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Page = () => {
  return (
    <View style={styles.iphone13141}>
      <Text style={styles.disasterDetect}>
        <Text style={styles.disaster}>{`Disaster
`}</Text>
        <Text style={styles.detect}>Detect</Text>
      </Text>
      <Image
        style={[styles.iphone13141Child, styles.iphone13141Layout]}
        contentFit="cover"
        
      />
      <Text style={[styles.phNo, styles.phNoTypo]}>Ph no</Text>
      <Image
        style={[styles.iphone13141Item, styles.iphone13141Layout]}
        contentFit="cover"
        
      />
      <Text style={[styles.password, styles.phNoTypo]}>Password</Text>
      <Text style={styles.hackstreet}>
        <Text style={styles.disaster}> Hack</Text>
        <Text style={styles.detect}>street</Text>
      </Text>
      <View style={styles.iphone13141Inner} />
      <Text style={styles.login}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13141Layout: {
    height: 1,
    width: 275,
    left: 48,
    position: "absolute",
  },
  phNoTypo: {
    height: 20,
    width: 100,
    fontFamily: FontFamily.inriaSansRegular,
    fontSize: FontSize.size_xl,
    left: 48,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  disaster: {
    color: Color.colorWhite,
  },
  detect: {
    color: Color.colorTomato,
  },
  disasterDetect: {
    top: 113,
    left: 19,
    fontSize: FontSize.size_45xl,
    width: 316,
    height: 151,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iphone13141Child: {
    top: 465,
  },
  phNo: {
    top: 410,
  },
  iphone13141Item: {
    top: 550,
  },
  password: {
    top: 495,
  },
  hackstreet: {
    top: 821,
    left: 274,
    width: 116,
    height: 23,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iphone13141Inner: {
    top: 629,
    left: 113,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTomato,
    width: 144,
    height: 47,
    position: "absolute",
  },
  login: {
    top: 631,
    left: 118,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inderRegular,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    height: 40,
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone13141: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Page;
