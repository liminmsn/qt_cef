#include "Desktop.h"
#include <QCloseEvent>

Desktop::Desktop(QWidget *parent)
    : QMainWindow(parent)
{
    setFixedSize(300, 600);
}

void Desktop::closeEvent(QCloseEvent *event)
{
    event->ignore();
    hide();
}