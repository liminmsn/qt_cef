#include "Desktop.h"
#include <QApplication>
#include <iostream>

int main(int argc, char **argv)
{
    std::cout << "Hello, from cef!\n";
    QApplication app(argc, argv);
    // app.setApplicationName("壁纸汇2");
    // app.setStyle("Fusion");
    app.setApplicationVersion("1.0.0");
    app.setOrganizationName("Leo Studio");
    app.setWindowIcon(QIcon(":/assets/logo.png"));
    app.setFont(QFont("PingFang SC", 13));

    Desktop win;
    win.show();
    return app.exec();
}
