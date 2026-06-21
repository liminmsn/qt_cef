import { Button, Card, Switch, Tabs } from '@heroui/react';
import Editor from "@monaco-editor/react";
import { Canvas } from "@react-three/fiber";
import { QWebChannel } from 'qwebchannel';
export default function () {

    function test() {
        new QWebChannel(
            window.qt.webChannelTransport,
            (channel) => {
                console.log(channel.objects);
            }
        );
    }

    const code = `
uniform float time;

void main()
{
    gl_FragColor =
        vec4(
            abs(sin(time)),
            0.0,
            1.0,
            1.0
        );
}
    `;

    return <Tabs className="w-full h-full pt-2">
        <Tabs.ListContainer className='w-1/2 mx-auto text-center'>
            <Tabs.List aria-label="Options" className='w-fit *:h-6 *:w-fit *:px-3 *:text-sm *:font-normal'>
                <Tabs.Tab id="overview">
                    代码
                    <Tabs.Indicator />
                </Tabs.Tab>
                <Tabs.Tab id="reports">
                    设置
                    <Tabs.Indicator />
                </Tabs.Tab>
            </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel id="overview" className='h-full'>
            <div className='grid grid-cols-2 space-x-1 h-full'>
                <div className='flex flex-col space-y-1'>
                    <Card className='p-0! pt-4! h-full'>
                        <Editor
                            theme=''
                            language="cpp"
                            value={code}
                        />
                    </Card>
                    <Card>
                        <Switch>
                            <Switch.Content>
                                <Switch.Control>
                                    <Switch.Thumb />
                                </Switch.Control>
                                Enable notifications
                            </Switch.Content>
                        </Switch>
                        <Button size="sm" onClick={test}>执行</Button>
                    </Card>
                </div>
                <Card className='p-0! overflow-clip'>
                    <Canvas camera={{ position: [0, 0, 3] }}>
                        <ambientLight />

                        <mesh rotation={[0.5, 0.5, 0]}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshNormalMaterial />
                        </mesh>
                    </Canvas>
                </Card>
            </div>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="reports">
            resr
        </Tabs.Panel>
    </Tabs>
}
