#include "Desktop.h"
#include "Bridge.h"
#include <QCloseEvent>
#include <QVBoxLayout>
#include <QWebEngineSettings>
#include <QWebEngineView>
#include <QWebChannel>

void Desktop::closeEvent(QCloseEvent *event)
{
    event->ignore();
    hide();
}

Desktop::Desktop(QWidget *parent) : QMainWindow(parent)
{
    // 远程调试
    qputenv("QTWEBENGINE_REMOTE_DEBUGGING", QByteArray("9222"));

    setFixedSize(800, 600);

    auto *widget = new QWidget(this);
    auto *vbox = new QVBoxLayout(widget);
    vbox->setContentsMargins(0, 0, 0, 0);
    setCentralWidget(widget);
    // 初始化Qtwebview环境
    auto *webview = new QWebEngineView(this);
    auto *channel = new QWebChannel(this);
    auto *bridge = new Bridge(this);

    // 链接注册桥梁
    channel->registerObject("bridge", bridge);
    webview->page()->setWebChannel(channel);

    // 加载网页内容
    vbox->addWidget(webview);
    webview->load(QUrl("http://localhost:5173/"));
}