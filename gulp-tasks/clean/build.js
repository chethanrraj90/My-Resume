/*!
 * Project:     cv
 * File:        ./gulp-tasks/clean/build.js
 * Copyright(c) 2021-nowdays Chethan R <Chethanrraj90@gmail.com>
 * License:     MIT
 */

'use strict';

//  ------------------------------------------------------------------------  //
//  -----------------------------  DEPENDENCIES  ---------------------------  //
//  ------------------------------------------------------------------------  //

const path = require('path');
const utin = require('util').inspect;

const del        = require('del');
const readConfig = require('read-config');
const vPaths     = require('vinyl-paths');


//  ------------------------------------------------------------------------  //
//  ----------------------------  CONFIGURATION  ---------------------------  //
//  ------------------------------------------------------------------------  //

let ME = Object.assign({}, global.ME || {});
utin.defaultOptions = Object.assign({}, ME.pkg.options.iopts || {});

const modName = path.basename(module.filename, '.js');
const modPath = path.relative(ME.WD, path.dirname(module.filename));
const modConfigFile = `${path.join(ME.WD, 'config', modPath, modName)}.json`;

ME.Config = Object.assign({}, ME.Config || {});
let C = ME.Config.colors;

//  ------------------------------------------------------------------------  //
//  ------------------------------  FUNCTIONS  -----------------------------  //
//  ------------------------------------------------------------------------  //

const cleanBuild = function (gulp) {
  console.log(`${ME.L}${ME.d()}[${C.Y}${modPath}/${modName}${C.N}]`);

  return gulp.src([ME.BUILD])
          .pipe(vPaths(del));
};


/**
 * EXPOSE
 * @public
 */

module.exports = exports = cleanBuild;
