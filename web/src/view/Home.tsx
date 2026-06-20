// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Button, Card, Label, Switch } from '@heroui/react';
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

    return <div>
        <Card className='w-1/3'>
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
    </div>
}