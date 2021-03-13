#!/bin/bash

npm un -S @papillonads/css @papillonads/library && npm i -S @papillonads/css @papillonads/library

npm run clean-up && npm run install-packages && npm audit fix
