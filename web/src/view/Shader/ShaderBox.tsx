import * as THREE from "three";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";

type Props = {
    fragmentShader: string;
    vertexShader: string;
};


// const vertexShader = `
// void main() {
//   gl_Position =
//     projectionMatrix *
//     modelViewMatrix *
//     vec4(position, 1.0);
// }
// `;

export default function ({ fragmentShader, vertexShader }: Props) {
    const material = useMemo(
        () =>
            new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 }
                },
                vertexShader,
                fragmentShader
            }),
        [fragmentShader, vertexShader]
    );

    useFrame((state) => {
        material.uniforms.time.value = state.clock.elapsedTime;
    });

    return (
        <mesh material={material}>
            <boxGeometry args={[3, 3, 3, 100]} />
        </mesh>
    );
}