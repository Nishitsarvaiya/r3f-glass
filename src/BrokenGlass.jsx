import { Float, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { DoubleSide } from "three";

const BrokenGlass = () => {
	const { viewport } = useThree();
	const { nodes } = useGLTF("/models/broken-glass-5.glb");

	return (
		<group position={[0, -0.75, 0]} scale={viewport.width * 2}>
			{nodes.Scene.children.map((shard) => (
				<Shard data={shard} key={shard.uuid} />
			))}
		</group>
	);
};

const Shard = ({ data }) => {
	const { transmission, resolution, reflectivity, thickness, ior, roughness, chromaticAberration } = useControls({
		transmission: {
			value: 0.99,
			min: 0,
			max: 1,
			step: 0.01,
		},
		resolution: 256,
		thickness: {
			value: 0.06,
			min: 0,
			max: 0.1,
			step: 0.01,
		},
		ior: {
			value: 1.82,
			min: 0,
			max: 3,
			step: 0.01,
		},
		roughness: {
			value: 0,
			min: 0,
			max: 1,
			step: 0.01,
		},
		chromaticAberration: {
			value: 0.75,
			min: 0,
			max: 3,
			step: 0.01,
		},
		reflectivity: {
			value: 0.5,
			min: 0,
			max: 1,
			step: 0.01,
		},
	});

	return (
		<Float frustumCulled floatIntensity={0.36} floatingRange={[0.1, 0.2]}>
			<mesh {...data}>
				{/* <meshBasicMaterial /> */}
				<MeshTransmissionMaterial
					transmission={transmission}
					roughness={roughness}
					ior={ior}
					reflectivity={reflectivity}
					chromaticAberration={chromaticAberration}
					thickness={thickness}
					resolution={resolution}
				/>
			</mesh>
		</Float>
	);
};

export default BrokenGlass;
