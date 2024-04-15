// // import * as React from "react";
// // import { StyleSheet, View, Text, Pressable } from "react-native";
// // import { LinearGradient } from "expo-linear-gradient";
// // // import { StackNavigationProp } from "@react-navigation/stack";
// // // import { useNavigation, ParamListBase } from "@react-navigation/native";
// // import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

// // const LoginUser = () => {
// // //   const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

// //   return (
// //     <LinearGradient
// //       style={styles.iphone13141}
// //       locations={[0, 1]}
// //       colors={["#1e3267", "#06163f"]}
// //     >
// //       <View style={styles.iphone13141Child} />
// //       <Text style={[styles.hackstreet, styles.loginTypo]}>Hackstreet</Text>
// //       <Text style={[styles.login, styles.loginTypo]}>Login</Text>
// //       <View style={[styles.iphone13141Item, styles.iphone13141ShadowBox]} />
// //       <View style={[styles.iphone13141Inner, styles.iphone13141ShadowBox]} />
// //       <Text style={[styles.password, styles.passwordLayout]}>password</Text>
// //       <Pressable
// //         style={[styles.rectanglePressable, styles.signInPosition]}
// //         onPress={() => navigation.navigate("IPhone13143")}
// //       />
// //       <Text style={[styles.signIn, styles.signInPosition]}>sign in</Text>
// //       <Pressable
// //         style={styles.newToReportContainer}
// //         onPress={() => navigation.navigate("IPhone13141")}
// //       >
// //         <Text style={styles.text}>
// //           <Text style={styles.newToReport}>{`New to report? 
// // `}</Text>
// //           <Text style={styles.registerHere}>register here</Text>
// //         </Text>
// //       </Pressable>
// //       <Text style={[styles.username, styles.passwordLayout]}>username</Text>
// //     </LinearGradient>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   loginTypo: {
// //     textShadowOffset: {
// //       width: 4,
// //       height: 4,
// //     },
// //     textShadowColor: "rgba(0, 0, 0, 0.25)",
// //     textAlign: "center",
// //     color: Color.colorWhite,
// //     fontFamily: FontFamily.jockeyOneRegular,
// //     position: "absolute",
// //   },
// //   iphone13141ShadowBox: {
// //     height: 39,
// //     width: 235,
// //     backgroundColor: Color.colorSteelblue,
// //     borderRadius: Border.br_5xs,
// //     left: 77,
// //     shadowOpacity: 1,
// //     elevation: 4,
// //     shadowRadius: 4,
// //     shadowOffset: {
// //       width: 0,
// //       height: 4,
// //     },
// //     shadowColor: "rgba(0, 0, 0, 0.25)",
// //     position: "absolute",
// //   },
// //   passwordLayout: {
// //     height: 22,
// //     width: 126,
// //     fontFamily: FontFamily.cutiveMonoRegular,
// //     lineHeight: 26,
// //     left: 81,
// //     fontSize: FontSize.size_5xl,
// //     textAlign: "center",
// //     position: "absolute",
// //   },
// //   signInPosition: {
// //     height: 43,
// //     width: 109,
// //     left: 140,
// //     top: 447,
// //     position: "absolute",
// //   },
// //   iphone13141Child: {
// //     top: 187,
// //     left: 55,
// //     borderRadius: Border.br_10xl,
// //     backgroundColor: Color.colorGainsboro,
// //     width: 278,
// //     height: 480,
// //     position: "absolute",
// //   },
// //   hackstreet: {
// //     top: 70,
// //     left: 62,
// //     fontSize: FontSize.size_29xl,
// //     width: 265,
// //     height: 57,
// //     textShadowRadius: 3.5,
// //   },
// //   login: {
// //     top: 210,
// //     left: 121,
// //     fontSize: FontSize.size_17xl,
// //     width: 148,
// //     height: 32,
// //     textShadowRadius: 4,
// //   },
// //   iphone13141Item: {
// //     top: 287,
// //   },
// //   iphone13141Inner: {
// //     top: 371,
// //   },
// //   password: {
// //     top: 375,
// //     color: Color.colorWhite,
// //   },
// //   rectanglePressable: {
// //     borderRadius: Border.br_3xs,
// //     backgroundColor: Color.colorDeepskyblue,
// //     width: 109,
// //     left: 140,
// //     top: 447,
// //     shadowOpacity: 1,
// //     elevation: 4,
// //     shadowRadius: 4,
// //     shadowOffset: {
// //       width: 0,
// //       height: 4,
// //     },
// //     shadowColor: "rgba(0, 0, 0, 0.25)",
// //   },
// //   signIn: {
// //     fontSize: FontSize.size_5xl,
// //     width: 109,
// //     left: 140,
// //     top: 447,
// //     textAlign: "center",
// //     color: Color.colorWhite,
// //     fontFamily: FontFamily.jockeyOneRegular,
// //   },
// //   newToReport: {
// //     color: Color.colorWhite,
// //   },
// //   registerHere: {
// //     color: Color.colorBlack,
// //   },
// //   text: {
// //     fontSize: 11,
// //     width: 131,
// //     height: 35,
// //     textAlign: "center",
// //     fontFamily: FontFamily.jockeyOneRegular,
// //   },
// //   newToReportContainer: {
// //     left: 129,
// //     top: 540,
// //     position: "absolute",
// //   },
// //   username: {
// //     top: 291,
// //     color: Color.colorWhitesmoke,
// //   },
// //   iphone13141: {
// //     flex: 1,
// //     width: "100%",
// //     height: 844,
// //     overflow: "hidden",
// //     backgroundColor: "transparent",
// //   },
// // });

// // export default LoginUser;


// import * as React from "react";
// import { StyleSheet, View, Text, Pressable } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// // Import your navigation dependencies here
// // import { useNavigation } from "@react-navigation/native";
// // import { StackNavigationProp } from "@react-navigation/stack";
// // import { ParamListBase } from "@react-navigation/native";
// // Import your custom style constants
// // import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

// const LoginUser = () => {
//   // Uncomment this once you have the necessary navigation setup
//   // const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

//   return (
//     <LinearGradient
//       style={styles.container}
//       locations={[0, 1]}
//       colors={["#1e3267", "#06163f"]}
//     >
//       <View style={styles.backgroundShape} />
//       <Text style={[styles.title, styles.typography]}>Hackstreet</Text>
//       <Text style={[styles.subtitle, styles.typography]}>Login</Text>

//       {/* Other UI components go here */}

//       <Pressable
//         style={styles.button}
//         onPress={() => {
//           // Navigate to another screen
//           // navigation.navigate("IPhone13143");
//         }}
//       >
//         <Text style={styles.buttonText}>Sign In</Text>
//       </Pressable>

//       <Pressable
//         style={styles.registerLink}
//         onPress={() => {
//           // Navigate to another screen
//           // navigation.navigate("IPhone13141");
//         }}
//       >
//         <Text style={styles.registerLinkText}>
//           New to report? <Text style={styles.registerHere}>Register here</Text>
//         </Text>
//       </Pressable>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   typography: {
//     textAlign: "center",
//     color: "#FFFFFF",
//     fontFamily: "jockeyOneRegular",
//   },
//   backgroundShape: {
//     position: "absolute",
//     top: 150,
//     left: 30,
//     width: 300,
//     height: 480,
//     backgroundColor: "#dcdcdc",
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 32,
//     marginTop: 50,
//   },
//   subtitle: {
//     fontSize: 20,
//     marginTop: 20,
//   },
//   button: {
//     marginTop: 30,
//     padding: 15,
//     backgroundColor: "#3498db",
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     textAlign: "center",
//   },
//   registerLink: {
//     marginTop: 20,
//   },
//   registerLinkText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   registerHere: {
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
// });

// export default LoginUser;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginUser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default LoginUser;
