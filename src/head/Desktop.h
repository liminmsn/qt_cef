#pragma once
#include <QMainWindow>

class Desktop : public QMainWindow
{
    Q_OBJECT
public:
    explicit Desktop(QWidget *parent = nullptr);

protected:
    void closeEvent(QCloseEvent *event) override;
};