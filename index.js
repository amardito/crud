'use strict';

const Mongooo = require('./lib/mongo/index');

Mongooo.Find = require('./lib/mongo/find');
Mongooo.Save = require('./lib/mongo/insert');
Mongooo.Update = require('./lib/mongo/update');
Mongooo.Delete = require('./lib/mongo/delete');
Mongooo.Option = require('./lib/mongo/option');

Mongooo.Compress = require('./lib/compress/index');

module.exports = Mongooo;