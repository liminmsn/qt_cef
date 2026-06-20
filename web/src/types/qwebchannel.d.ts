declare module "qwebchannel" {
    export interface QObjectMap {
        [key: string]: any;
    }

    export interface QWebChannelTransport {
        send(data: string): void;
        onmessage: ((message: any) => void) | null;
    }

    export class QWebChannel<T extends QObjectMap = QObjectMap> {
        constructor(
            transport: QWebChannelTransport,
            initCallback: (channel: QWebChannel<T>) => void
        );

        objects: T;
    }

    export default QWebChannel;
}