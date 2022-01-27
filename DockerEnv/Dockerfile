FROM ubuntu:16.04
MAINTAINER Chethan R
ARG APP_NAME=MyResume

RUN apt-get update && apt-get install git vim sudo curl make apache2 software-properties-common -y \
    && curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - \
    && apt install nodejs -y
# RUN npm install --save gulp bower gulp-token-replace jimp terser noty -g \
#     && npm install --save popper.js@1.12.9 jquery@1.9.1 bootstrap@4.0.0
RUN yes | add-apt-repository ppa:certbot/certbot \
    && apt-get update && apt-get install python-certbot-apache -y

RUN a2enmod rewrite \
    && a2enmod socache_shmcb \
    && a2enmod ssl

WORKDIR /opt
COPY entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh

CMD ["build"]
ENTRYPOINT [ "/entrypoint.sh" ]
