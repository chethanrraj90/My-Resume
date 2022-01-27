#!/bin/bash
## apt-get update && apt-get install -y curl

export APP_NAME=MyResume

function initialsetup () {
    ## installing the dependencies
    apt-get update && apt-get install git vim sudo curl make apache2 -y \
        && curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - \
        && apt install nodejs -y


    APP_NAME=${APP_NAME} && git clone https://github.com/akhilrajmailbox/${APP_NAME}.git && cd ${APP_NAME}

    npm install --save gulp bower gulp-token-replace jimp terser noty -g \
        && npm install --save popper.js@1.12.9 jquery@1.9.1 bootstrap@4.0.0
}


function artifactbuild() {
    cd ${APP_NAME}
    make setup
    make build
}

function webservice() {
    ## restarting the apache2 services
    /etc/init.d/apache2 stop
    rm -rf /var/www/html/*
    cp -r docs/* /var/www/html/
    /etc/init.d/apache2 start
    /etc/init.d/apache2 status
}


if [[ ${1} == build ]] ; then
    initialsetup
    artifactbuild
    webservice
elif [[ ${1} == rebuild ]] ; then
    artifactbuild
    webservice
elif [[ ${1} == artifactbuild ]] ; then
    initialsetup
    artifactbuild
else
cat << EOF
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    options :
        build
        rebuild
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
EOF
fi