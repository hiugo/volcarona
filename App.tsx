import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Asset from "./src/asset";

// order
// 1. wings center
// 2. wings bottom
// 3. wings top
// 4. body bottom back
// 5. body bottom front
// 6. body top
// 7. fur
// 8. head / horns (-1/+1)
// 9. eyes / arms

const ASSETS = [
  // WINGS
  {
    id: "wing-left-top",
    source: require("./assets/volcarona/wing-left-top.png"),
    layer: 30,
    x: -1,
    y: 1.25,
  },
  {
    id: "wing-left-center",
    source: require("./assets/volcarona/wing-left-center.png"),
    layer: 10,
    x: -1,
    y: 1.25,
  },
  {
    id: "wing-left-bottom",
    source: require("./assets/volcarona/wing-left-bottom.png"),
    layer: 20,
    x: -1,
    y: 1.25,
  },
  {
    id: "wing-right-top",
    source: require("./assets/volcarona/wing-right-top.png"),
    layer: 30,
    x: -1,
    y: 1.25,
  },
  {
    id: "wing-right-center",
    source: require("./assets/volcarona/wing-right-center.png"),
    layer: 10,
    x: -1,
    y: 1.25,
  },
  {
    id: "wing-right-bottom",
    source: require("./assets/volcarona/wing-right-bottom.png"),
    layer: 20,
    x: -1,
    y: 1.25,
  },

  // BODY
  {
    id: "body-bottom-back",
    source: require("./assets/volcarona/body-bottom-back.png"),
    layer: 40,
    x: 0,
    y: 0,
  },
  {
    id: "body-bottom-front",
    source: require("./assets/volcarona/body-bottom-front.png"),
    layer: 50,
    x: 0.5,
    y: 0,
  },
  {
    id: "body-top",
    source: require("./assets/volcarona/body-top.png"),
    layer: 60,
    x: 0,
    y: 0,
  },
  {
    id: "fur-center",
    source: require("./assets/volcarona/fur-center.png"),
    layer: 70,
    x: 1,
    y: 0,
  },
  {
    id: "fur-left",
    source: require("./assets/volcarona/fur-left.png"),
    layer: 69,
    x: 0.5,
    y: 0,
  },
  {
    id: "fur-right",
    source: require("./assets/volcarona/fur-right.png"),
    layer: 69,
    x: 0.5,
    y: 0,
  },

  // HEAD
  {
    id: "head",
    source: require("./assets/volcarona/head.png"),
    layer: 80,
    x: 1.5,
    y: -0.5,
  },
  {
    id: "horn-left",
    source: require("./assets/volcarona/horn-left.png"),
    layer: 80,
    x: 1.5,
    y: -0.5,
    xInput: [-1, -0.5, 0, 0.5, 1],
    xOutput: [1.5, 1.5, 0, -0.5, -0.5],
    zIndexOutput: [-1, 1],
  },
  {
    id: "horn-right",
    source: require("./assets/volcarona/horn-right.png"),
    layer: 80,
    x: 1.5,
    y: -0.5,
    xInput: [-1, -0.5, 0, 0.5, 1],
    xOutput: [0.5, 0.5, 0, -1.5, -1.5],
    zIndexOutput: [1, -1],
  },
  {
    id: "eye-left",
    source: require("./assets/volcarona/eye-left.png"),
    layer: 90,
    x: 2,
    y: -0.5,
  },
  {
    id: "eye-right",
    source: require("./assets/volcarona/eye-right.png"),
    layer: 90,
    x: 2,
    y: -0.5,
  },

  // ARMS
  {
    id: "arms-left",
    source: require("./assets/volcarona/arms-left.png"),
    layer: 90,
    x: 0.25,
    y: -0.25,
  },
  {
    id: "arms-right",
    source: require("./assets/volcarona/arms-right.png"),
    layer: 90,
    x: 0.25,
    y: -0.25,
  },
];

function App() {
  return (
    <View style={styles.container}>
      {ASSETS.map((asset) => (
        <Asset key={asset.id} {...asset} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
