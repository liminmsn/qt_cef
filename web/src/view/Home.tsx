// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Button } from '@heroui/react';
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
        <Button onClick={test}>测试</Button>
    </div>
}