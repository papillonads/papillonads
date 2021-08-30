#!/bin/bash

npm un -D nodemon webpack webpack-dev-server && npm i -D nodemon webpack@^4.46.0 webpack-dev-server@^3.11.2

npm run clean-up && npm run install-packages && npm audit fix
