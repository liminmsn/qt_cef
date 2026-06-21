#include "Desktop.h"
#include <QApplication>
#include <iostream>

int main(int argc, char **argv)
{
    std::cout << "Hello, from cef!\n";
    QApplication app(argc, argv);
    // app.setApplicationName("");
    // app.setStyle("Fusion");
    // app.setFont(QFont("PingFang SC", 13));
    // app.setWindowIcon(QIcon(":/assets/logo.png"));
    app.setApplicationVersion("1.0.0");
    app.setOrganizationName("Leo Studio");

    Desktop win;
    win.show();
    return app.exec();
}
