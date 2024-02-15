import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const TextGroup = () => {
	const { viewport } = useThree();

	return (
		<group>
			<Text
				font="/ClashDisplay-Medium.ttf"
				fontSize={0.4}
				anchorX="center"
				anchorY="middle"
				textAlign="center"
				color="white"
				position={[0, 0, -0.1]}>
				404
			</Text>
			<Text
				font="/ClashDisplay-Regular.ttf"
				fontSize={0.03}
				anchorX="center"
				anchorY="middle"
				color="white"
				position={[0, -0.22, -0.1]}
				textAlign="center">
				This link is broken
			</Text>
		</group>
	);
};

export default TextGroup;
