import { Tabs, Label } from "@heroui/react";
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

  useEffect(() => {
    navigate("/code");
  }, [navigate])

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
            return <Tabs.Panel key={page.path} id={page.path} className="h-full pt-0!">
              <Outlet />
            </Tabs.Panel>
          })
        }
      </Tabs>
    </div>
  </ThemeProvider>
}