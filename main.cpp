#include "Desktop.h"
#include <QApplication>
#include <QCursor>
#include <QMenu>
#include <QPainter>
#include <QSystemTrayIcon>
#include <QPainterPath>
#include <iostream>

#ifdef Q_OS_MAC
#include <objc/objc.h>
#include <objc/message.h>
#include <objc/runtime.h>
using NSInteger = long;
#endif

static QIcon createTrayIcon()
{
    QPixmap pixmap(96, 96);
    pixmap.fill(Qt::transparent);

    QPainter painter(&pixmap);
    painter.setRenderHint(QPainter::Antialiasing);

    // 白色圆
    painter.setBrush(Qt::white);
    painter.setPen(Qt::NoPen);
    painter.drawEllipse(pixmap.rect().adjusted(4, 4, -4, -4));

    // 文字路径
    QPainterPath path;
    QFont font("Arial", 40, QFont::Bold);

    path.addText(
        25,
        60,
        font,
        QStringLiteral("壁")
    );

    // 清除文字区域
    painter.setCompositionMode(
        QPainter::CompositionMode_Clear
    );

    painter.fillPath(path, Qt::transparent);

    painter.end();

    return QIcon(pixmap);
}

int main(int argc, char **argv)
{
    std::cout << "Hello, from cef!\n";
    QApplication app(argc, argv);
    QApplication::setQuitOnLastWindowClosed(false);
    
    // app.setApplicationName("壁纸汇2");
    // app.setStyle("Fusion");
    app.setApplicationVersion("1.0.0");
    app.setOrganizationName("Leo Studio");
    app.setWindowIcon(
        QIcon(":/assets/logo.png")
    );
    app.setFont(
        QFont("PingFang SC", 13)
    );


#ifdef Q_OS_MAC
    id appKit = ((id (*)(id, SEL))objc_msgSend)((id)objc_getClass("NSApplication"), sel_getUid("sharedApplication"));
    using SetPolicyFunc = void (*)(id, SEL, NSInteger);
    ((SetPolicyFunc)objc_msgSend)(appKit, sel_getUid("setActivationPolicy:"), 1);
#endif

    Desktop win;

    QSystemTrayIcon tray(createTrayIcon(), &app);
    tray.setToolTip(QStringLiteral("壁纸汇2"));

    QMenu menu;
    QAction *quitAction = menu.addAction(QStringLiteral("退出"));
    QObject::connect(quitAction, &QAction::triggered, &app, &QApplication::quit);

    QObject::connect(&tray, &QSystemTrayIcon::activated, [&](QSystemTrayIcon::ActivationReason reason) {
        if (reason == QSystemTrayIcon::Trigger || reason == QSystemTrayIcon::DoubleClick) {
            if (win.isVisible()) {
                win.hide();
            } else {
                win.show();
                // win.activateWindow();
                // win.raise();
            }
        } else if (reason == QSystemTrayIcon::Context) {
            menu.exec(QCursor::pos());
        }
    });

    win.show();
    tray.show();
    return app.exec();
}
