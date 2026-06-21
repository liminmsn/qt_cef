import { Button, Card, Label } from "@heroui/react";
import { Editor } from "@monaco-editor/react";
import { Canvas } from "@react-three/fiber";
import ShaderBox from "./Shader/ShaderBox";
import { useState } from "react";
import { Environment, Sky } from "@react-three/drei";

const defvertexShader = `
uniform float time;

varying vec2 vUv;

void main()
{
    vUv = uv;

    vec3 pos = position;

    pos.y +=
        sin(pos.x * 4.0 + time) * 0.15;

    pos.y +=
        sin(pos.z * 5.0 + time * 1.3) * 0.1;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(pos, 1.0);
}
`

const defaultCode = `
uniform float time;

varying vec2 vUv;

void main()
{
    vec3 deep =
        vec3(0.0, 0.2, 0.5);

    vec3 shallow =
        vec3(0.0, 0.7, 1.0);

    float wave =
        sin(vUv.x * 30.0 + time) *
        sin(vUv.y * 20.0 + time);

    wave = wave * 0.5 + 0.5;

    vec3 color =
        mix(deep, shallow, wave);

    gl_FragColor =
        vec4(color, 1.0);
}`;
export default function () {
    const [code, setCode] = useState(defaultCode);
    const [runningCode, setRunningCode] = useState(defaultCode);
    const [vertexShader, setVertexShader] = useState(defvertexShader);



    return <div className="h-full flex gap-x-1">
        <Card className="flex-1 p-2!">
            <Editor
                theme='vs-dark'
                language="cpp"
                value={code}
                onChange={(v) => setCode(v ?? "")}
            />
        </Card>
        <div className="w-2/6 flex flex-col space-y-1">
            <Card className="p-0! size-full">
                <Canvas camera={{ position: [3, 6, 5], fov: 45 }}>
                    {/* <Sky
                        distance={450000}
                        sunPosition={[1, 1, 1]}
                        turbidity={8}
                        rayleigh={2}
                        mieCoefficient={0.005}
                        mieDirectionalG={0.8}
                    /> */}
                    {/* <ambientLight intensity={1} /> */}
                    {/* <Environment preset="forest" /> */}
                    {/* <color attach="background" args={["#87ceeb"]} /> */}
                    <ShaderBox fragmentShader={runningCode} vertexShader={vertexShader} />
                </Canvas>
            </Card>
            <Card className="p-1">
                <Button size="sm" onPress={() => setRunningCode(code)}>运行</Button>
            </Card>
            <Card className="h-2/4 p-1!">
                <Label>输出</Label>
            </Card>
        </div>
    </div>

}
