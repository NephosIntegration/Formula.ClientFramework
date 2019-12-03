#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/..

function listCommands() {
    echo ""
    echo "==========================="
    echo "Parameter - Description"
    echo "==========================="
	echo "install       - Install the Formula framework templates"
	echo "uninstall     - Removes the Formula framework templates"
    echo ""
}

function install() {
    dotnet new -i ./templates/vuetify/
    echo ""
    echo ""
    echo "==========================="
    echo "Installed"
    echo "==========================="
    echo ""
    echo "Examples"
    echo "dotnet new formula-client-vuetify -n HelloWorld.Site -s my-app"
    echo "cd HelloWorld.Site"
}

function uninstall() {
    uninstallCmd=$(dotnet new -u | grep vuetify | grep dotnet)
    eval "$uninstallCmd"
    echo "==========================="
    echo "Uninstalled"
    echo "==========================="
}

if [ "install" = "${1,,}" ]; then
    install
elif [ "uninstall" = "${1,,}" ]; then
    uninstall
else
    listCommands
fi
