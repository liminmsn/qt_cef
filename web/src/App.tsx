import { Tabs, Label } from "@heroui/react";
// import { Editor } from "@monaco-editor/react";
// import { Canvas } from "@react-three/fiber";
// import { QWebChannel } from "qwebchannel";
import { ThemeProvider } from "next-themes";
import router from "./router";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";


export default function () {
  const pages = router.routes[0].children;
  const navigate = useNavigate();
  // function test() {
  //   new QWebChannel(
  //     window.qt.webChannelTransport,
  //     (channel) => {
  //       console.log(channel.objects);
  //     }
  //   );
  // }

  // const code = `
  // uniform float time;

  // void main()
  // {
  //     gl_FragColor =
  //         vec4(
  //             abs(sin(time)),
  //             0.0,
  //             1.0,
  //             1.0
  //         );
  // }
  //     `;

  useEffect(() => {
    navigate("/code");
  }, [])

  return <ThemeProvider
    defaultTheme='dark'
    enableSystem>
    <div className='h-svh'>
      <Tabs className="w-full h-full pt-2">
        <Tabs.ListContainer className='w-1/2 mx-auto text-center'>
          <Tabs.List aria-label="Options" className='w-fit *:h-6 *:w-fit *:px-3 *:text-sm *:font-normal'>
            {
              pages?.map(item => {
                return <Tabs.Tab
                  key={item.path}
                  id={item.path}
                  onClick={() => item.path && navigate(item.path)}>
                  <Label>{item.id}</Label>
                  <Tabs.Indicator />
                </Tabs.Tab>
              })
            }
          </Tabs.List>
        </Tabs.ListContainer>
        {
          pages?.map(page => {
            return <Tabs.Panel id={page.path} className="h-full pt-0!">
              <Outlet />
            </Tabs.Panel>
          })
        }
        {/* <Tabs.Panel id="overview" className='h-full'>
          <div className='grid grid-cols-2 space-x-1 h-full'>
            <div className='flex flex-col space-y-1'>
              <Card className='p-0! py-4! h-full'>
                <Editor
                  theme='vs-dark'
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
        </Tabs.Panel> */}
      </Tabs>
    </div>
  </ThemeProvider>
}