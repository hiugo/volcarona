import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import Animated, {
  interpolate,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const DISTANCE = width * 0.05;

type Props = {
  source: ImageSourcePropType;
  layer: number;
  x: number;
  y: number;
  xInput?: number[];
  xOutput?: number[];
  zIndexOutput?: number[];
};

function Asset({ source, layer, x, y, xInput, xOutput, zIndexOutput }: Props) {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: 10,
  });

  const animatedStyles = useAnimatedStyle(() => {
    const { qw, qx } = animatedSensor.sensor.value;

    const translateX = interpolate(
      qw,
      xInput ?? [-1, -0.5, 0, 0.5, 1],
      xOutput ?? [1, 1, 0, -1, -1]
    );

    const translateY = interpolate(
      qx,
      [-0.5, 0, 0.5, 1, 1.5],
      [1, 1, 0, -1, -1]
    );

    const zIndex = zIndexOutput ? layer + zIndexOutput[qw > 0 ? 0 : 1] : layer;

    return {
      zIndex,
      transform: [
        { translateX: translateX * x * DISTANCE },
        { translateY: translateY * y * DISTANCE },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Image style={styles.image} source={source} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});

export default Asset;
