# Javascript exemplary repo

This repo contains exemplary usage of javascript:

1. Loading JSON file with validation and generating list with content
2. Validation of login form on submit trying
3. Communication with MongoDb database and simple php API

-------

# Instalation

## Production env
```
git clone https://github.com/gustawdaniel/javascript_training.git
npm install
firefox web/index.html &
```

## Developing env
```
git clone https://github.com/gustawdaniel/javascript_training.git
npm install
gulp
firefox localhost:8080 &
```

## API SETUP in any env
```
cd api && php -S localhost:8000 api.php
```

## Instalation of mongodb (ubuntu 16.04)

> [www.digitalocean.com](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)

## Instalation php + mongodb

```
sudo apt-get install php-mongodb
sudo apt-get install php7.0-dev
sudo apt install php-pear
sudo pecl install mongodb
```

##Features:

+ live server in developing mode
+ fully, flexible assets managing
+ live nav-bar for single page app
+ code encapsulation by anonymous functions
+ Cross-Origin Resource Sharing

##Packages

+ npm
+ gulp
+ bower
+ mongodb

##Vendor:

+ bootstrap
+ jquery
+ font-avesome

--------------

$ API Documentation

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

## GET /words

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

## GET /words/{id}

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

## POST /words

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

## DELETE /words/{id}

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
>Type test of api in behat.


###Notes:
Saving pass of git

     git config --global credential.helper cache