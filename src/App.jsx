import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import World from './World';
import { ACESFilmicToneMapping } from 'three';

function App() {
	return (
		<Canvas
			// orthographic
			camera={{ position: [0, 0, 5] }}
			style={{ backgroundColor: '#000000' }}
			gl={{ antialias: true }}
		>
			<OrbitControls enableDamping />
			{/* <directionalLight position={[0, 0.1, 1]} intensity={3} /> */}
			<Environment preset='city' />
			<World />
		</Canvas>
	);
}

export default App;
