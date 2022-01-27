## MyResume


* Clone your repository to the system
* runt he following command to build and start the services

```
mkdir /root/MyCV
cd /root/MyCV
git clone https://github.com/akhilrajmailbox/MyResume.git MyResume
docker run -d -p 80:80 -p 443:443 -v /root/MyCV/letsencrypt:/etc/letsencrypt -v /root/MyCV/MyResume:/opt/MyResume -e "APP_NAME=MyResume" --name myresume --hostname myresume akhilrajmailbox/myresume:latest
```
**change the `MyResume` with your repository cloned location.**


**SSL Configuration**

* configure your DNS to point the subdomain to your system public ip address
* after the DNS propagation time, login to the docker container and execute the following command and give your input accordingly

```
certbot --apache -d mycv.mydomain.com
```


**Google MAPS API** / **Or use iframe**

* login to your [gcp](https://console.cloud.google.com/google/maps-apis/overview) and get the API keys.
* update the `config/production.json` file `YOUR_GOOGLE_MAPS_KEY`


**Create the artifacts for your website**

**Note** : Either run as root user or clone this repo to `/tmp/` folder then run as non root user

```
cd /root/
git clone https://github.com/akhilrajmailbox/MyResume.git MyResume
docker run --rm -v /root/MyResume:/opt/MyResume -e "APP_NAME=MyResume" --name myresume --hostname myresume akhilrajmailbox/myresume:latest artifactbuild
```