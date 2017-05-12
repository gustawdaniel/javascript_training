[![Build Status](https://travis-ci.org/gustawdaniel/javascript_training.svg?branch=master)](https://travis-ci.org/gustawdaniel/javascript_training)

# Javascript training repo

This repo contains exemplary usage of javascript:

1. Loading JSON file with validation and generating list with content
2. Validation of login form on submit
3. Communication with MongoDb database and simple php API
4. Regexp checking on keyup
5. Counting words in textarea and displain list below
6. Reading batery state for navigator object
7. Creation table of multiplication using pure javascript
8. Inheritace of objects and tool for writing test for these objects
9. Ajax communication with json-server that modify list of girs on refresh!
10. Php that set up cookie session and allow to use it on client side



-------------------

# Instalation
To fully open project you will need 4 terminals - one for any of servers. Before cloning repo create catalog for it. Enter tho catalog and setup any part of code below in separate terminal. You need to have free the following ports:
+ 8080 - gulp-index
+ 8000 - php-mongo
+ 8040 - php-cookie
+ 3000 - json-server
## Gulp server with index
```
git clone https://github.com/gustawdaniel/javascript_training.git .
npm install
gulp
firefox localhost:8080 &
```

## MongoDb API server
```
cd api && php -S localhost:8000 api.php
```

## Php server for cookie
```
cd php && php -S localhost:8040
```

## Json-server for db.json
```
npm install -g json-server
cd src/data/ json-server db.json
```

-------------------------



## Features:

+ live server in developing mode
+ fully, flexible assets managing
+ live nav-bar for single page app
+ code encapsulation by anonymous functions
+ Cross-Origin Resource Sharing

## Packages

+ npm
+ gulp
+ bower
+ mongodb

## Vendor:

+ bootstrap
+ jquery
+ font-avesome

--------------

### Mongo API Documentation

To start api server type:

```
cd api && php -S localhost:8000 api.php
```

Resources:

+ words

Methods:

+ GET `/words`
+ GET `/words/{id}`
+ POST `/words`
+ DELETE `/words/{id}`

Description:

#### GET /words

To get all words in database use:

```
http GET localhost:8000/words
```

Response:

```
HTTP/1.1 200 OK
Connection: close
Content-Type: application/json
Host: localhost:8000
X-Powered-By: PHP/7.0.12-1+deb.sury.org~xenial+1

{
    "words": [
        {
            "id": "581e489514c3cd5b41341038",
            "word": "example"
        },
        {
            "id": "581e4a668b04141faa42bce1",
            "word": "word"
        }
    ]
}

```

#### GET /words/{id}

To get one word from database use:

```
http GET localhost:8000/words/581f0d1a8b04141cb54294b1
```

Response:

```
HTTP/1.1 200 OK
Connection: close
Content-Type: application/json
Host: localhost:8000
X-Powered-By: PHP/7.0.12-1+deb.sury.org~xenial+1

{
    "words": {
        "id": "581f0d1a8b04141cb54294b1",
        "word": "AAA"
    }
}

```

#### POST /words

To add one word to database use:

```
http POST localhost:8000/words word="new word"
```

Response:

```
HTTP/1.1 200 OK
Connection: close
Content-Type: application/json
Host: localhost:8000
X-Powered-By: PHP/7.0.12-1+deb.sury.org~xenial+1

{
    "words": {
        "id": "581f19a98b04141cb54294bc",
        "word": "new word"
    }
}

```

#### DELETE /words/{id}

To delete word from database use:

```
http DELETE localhost:8000/words/581e489514c3cd5b41341038
```

Response:

```
HTTP/1.1 202 Accepted
Connection: close
Content-Type: application/json
Host: localhost:8000
X-Powered-By: PHP/7.0.12-1+deb.sury.org~xenial+1

[]
```

>Todo:
>Type test of api in Behat.
>Simplify setting up project. I would like to open 4 servers in one command.


### Notes:

Instalation of mongodb (ubuntu 16.04)

> [www.digitalocean.com](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)

Instalation php + mongodb

```
sudo apt-get install php-mongodb
sudo apt-get install php7.0-dev
sudo apt install php-pear
sudo pecl install mongodb
```

Saving pass of git

     git config --global credential.helper cache


# How to install MongoDB and PHP in Ubuntu 16

Add repo with mongo

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```

Update packages list in system

```
sudo apt-get update
```

Install mongo db

```
sudo apt-get install -y mongodb-org
```

and driver of mongo db for PHP

```
sudo apt-get install php-mongodb
```

Start server

```
sudo service mongod start
```

You can diagnose state of server by:

```
service mongod status
mongo
ctrl+x
```

Next after clone repo from:

```
git clone https://github.com/gustawdaniel/javascript_training.git
```

do

```
cd javascript_training
```

open console 2 and start php servrer

```
cd api && php -S localhost:8000 api.php
```

in firs console

```
sudo apt install httpie
```

