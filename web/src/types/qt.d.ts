export {};

declare global {
    interface QtWebChannelTransport {
        send(data: string): void;
        onmessage: ((message: any) => void) | null;
    }

    interface QtGlobal {
        webChannelTransport: QtWebChannelTransport;
    }

    interface Window {
        qt: QtGlobal;
    }

    const qt: QtGlobal;
}