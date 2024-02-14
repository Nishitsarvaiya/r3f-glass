import { Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const TextGroup = () => {
	const { viewport } = useThree();

	return (
		<group>
			<Text
				font='/ClashDisplay-Medium.ttf'
				fontSize={viewport.width > 6 ? 2.24 : 1.24}
				anchorX='center'
				anchorY='middle'
				textAlign='center'
				position={[0, 0.5, 0]}
			>
				404
			</Text>
			<Text
				font='/ClashDisplay-Regular.ttf'
				fontSize={viewport.width > 6 ? 0.165 : 0.13}
				anchorX='center'
				position={[0, -0.7, 0]}
				textAlign='center'
			>
				This link is broken
			</Text>
		</group>
	);
};

export default TextGroup;
