'use strict';

const isInChina = require('../isInChina');

module.exports = isInChina
  ? 'https://service-9p6tdp4y-1300963013.gz.apigw.tencentcs.com/release/'
  : null;
