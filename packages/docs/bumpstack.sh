#!/bin/bash

npm un -D nodemon webpack webpack-dev-server && npm i -D nodemon webpack@^4.46.0 webpack-dev-server

npm run clean-up && npm run install-packages && npm audit fix
