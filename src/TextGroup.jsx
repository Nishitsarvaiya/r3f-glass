import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const TextGroup = () => {
	const { viewport } = useThree();

	return (
		<group>
			<Text
				font="/ClashDisplay-Medium.ttf"
				fontSize={viewport.width * 0.24}
				anchorX="center"
				anchorY="middle"
				textAlign="center"
				color="white"
				position={[0, 0, -0.1]}>
				404
			</Text>
			<Text
				font="/ClashDisplay-Regular.ttf"
				fontSize={viewport.width > 2 ? 0.03 : 0.018}
				anchorX="center"
				anchorY="top"
				color="white"
				position={[0, viewport.width > 2 ? -0.26 : -0.24, -0.1]}
				textAlign="center">
				This link is broken
			</Text>
		</group>
	);
};

export default TextGroup;
