#! /bin/bash

rm ffos-chat.zip
zip -r ffos-chat index.html LICENSE manifest.webapp \
 app/* css/* fonts/* img/icons/* \
 node_modules/font-awesome/* \
 node_modules/socket.io-client/* \
 node_modules/es6-shim/* \
 node_modules/systemjs/* \
 node_modules/angular2/* \
 node_modules/@angular2-material/* \
 node_modules/rxjs/*
