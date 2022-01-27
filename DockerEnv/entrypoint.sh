#!/bin/bash
## apt-get update && apt-get install -y curl

export APP_NAME=${APP_NAME}
cd /opt/${APP_NAME}

function initialsetup () {
    if [[ ! -z ${APP_NAME} ]] ; then
        npm install --save gulp bower gulp-token-replace jimp terser noty -g \
        && npm install --save popper.js@1.12.9 jquery@1.9.1 bootstrap@4.0.0
    else
        echo -e "APP_NAME need to set...! \n Task aborting...!"
        exit 1
    fi
}


function artifactbuild() {
    make setup
    make build
}


function certbotrenew() {
    while true ; do
        echo "trying to renew certs"
        certbot renew
        echo "sleeping for one day...!"
        sleep 86400
    done
}

function webservice() {
    ## restarting the apache2 services
    /etc/init.d/apache2 stop
    rm -rf /var/www/html/*
    cp -r docs/* /var/www/html/
    certbotrenew &
    apachectl -D FOREGROUND
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