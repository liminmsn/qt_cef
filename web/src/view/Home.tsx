import { Button, Card, Label, Switch, Tabs } from '@heroui/react';
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

    return <Tabs className="w-full h-full pt-2">
        <Tabs.ListContainer className='w-1/2 mx-auto text-center'>
            <Tabs.List aria-label="Options" className='w-fit *:h-6 *:w-fit *:px-3 *:text-sm *:font-normal'>
                <Tabs.Tab id="overview">
                    视图
                    <Tabs.Indicator />
                </Tabs.Tab>
                <Tabs.Tab id="analytics">
                    分类
                    <Tabs.Indicator />
                </Tabs.Tab>
                <Tabs.Tab id="reports">
                    设置
                    <Tabs.Indicator />
                </Tabs.Tab>
            </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel id="overview">
            <Card>
                <Switch>
                    <Switch.Content>
                        <Switch.Control>
                            <Switch.Thumb />
                        </Switch.Control>
                        Enable notifications
                    </Switch.Content>
                </Switch>
                <Label>hello world</Label>
                <Button size="sm" onClick={test}>测试</Button>
            </Card>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="analytics">
            <p>Track your metrics and analyze performance data.</p>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="reports">
            <p>Generate and download detailed reports.</p>
        </Tabs.Panel>
    </Tabs>
}