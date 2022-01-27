## :runner: Usage ##

### 1. Clone the repository and enter its directory ###
```shell
$ APP_NAME=MyResume \
&& git clone https://github.com/akhilrajmailbox/${APP_NAME}.git \
&& cd ${APP_NAME}
```

### 2. Install the dependencies ###
```shell
$ make setup
```

### 3. Configure ###

Replace values in `config/person.json` with your personal information

### 4. Build ###
```shell
$ make build
```

### 5. Deploy ###
```shell
$ make deploy
```

This will create/update `webroot` directory inside the project root.
Use this directory as DocumentRoot in VirtualHost configuration of your web server.
