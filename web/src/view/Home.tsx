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

    return <div className='p-2'>
        hello
    </div>
}