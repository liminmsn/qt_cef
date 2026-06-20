#pragma once
#include <QObject>
#include <QDebug>

class Bridge : public QObject
{
    Q_OBJECT
public:
    explicit Bridge(QObject *parent = nullptr)
        : QObject(parent)
    {
    }
public slots:
    void showMessage(const QString &msg)
    {
        qDebug() << "JS:" << msg;
    };
    QString getName()
    {
        return "Qt Desktop";
    };
};