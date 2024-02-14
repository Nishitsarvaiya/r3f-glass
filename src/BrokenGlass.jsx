import { Float, MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { DoubleSide } from 'three';

const BrokenGlass = () => {
	const { viewport } = useThree();
	const { nodes } = useGLTF('/models/broken-glass-2.glb');

	return (
		<group scale={viewport.width * 1.2} position={[0, 0, 1]}>
			{nodes.Scene.children.map((shard) => (
				<Shard data={shard} key={shard.uuid} />
			))}
		</group>
	);
};

const Shard = ({ data }) => {
	return (
		<Float floatingRange={[0, 0.2]} floatIntensity={0.05}>
			<mesh {...data}>
				{/* <meshBasicMaterial /> */}
				<MeshTransmissionMaterial
					transmission={1}
					resolution={300}
					thickness={0.54}
					ior={1.6}
					chromaticAberration={0.03}
					roughness={0.12}
					metalness={0.1}
					side={DoubleSide}
				/>
			</mesh>
		</Float>
	);
};

export default BrokenGlass;
