
'use strict';

var winston = require('winston');
var pkg = require('../package.json');
var child_process = require('child_process');
var monitor_runner = require('../lib/monitor_runner');
var configuration_updater = require('../lib/configuration_updater');

winston.info('Codeine Peer - ' + pkg.version);

