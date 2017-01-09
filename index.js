//# sourceMappingURL=./index.sibilant
;
var chokidar = require("chokidar"),
    child_process = require("child_process"),
    fs = require("fs"),
    Sibilant = (require("./lib/sibilant")).Sibilant,
    { 
  Array:Arr
 } = require("./lib/async"),
    lib_util_js$1 = require("./lib/util.js"),
    create = lib_util_js$1.create,
    extend = lib_util_js$1.extend,
    mixin = lib_util_js$1.mixin,
    curry = lib_util_js$1.curry,
    lib_util_js$1 = undefined,
    program = require("commander"),
    R = require("ramda");
Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each index.sibilant:12:0 */

  this.forEach(f);
  return this;
});
var list = (function list$(val) {
  /* list index.sibilant:16:0 */

  return val.split(",");
});
program.usage("[options] <file ...>").option("-w --watch [watch-root]").option("-o --output [path]", []).parse(process.argv);
var makePretty = (function makePretty$() {
  /* make-pretty index.sibilant:28:0 */

  
});
var compileToSameDir = (function compileToSameDir$() {
  /* compile-to-same-dir index.sibilant:30:0 */

  
});
var getTargetName = (function getTargetName$(o, path) {
  /* get-target-name index.sibilant:31:0 */

  return Path.join((o || Path.dirname(path)), (Path.basename(path, ".sibilant") + ".js"));
});
let buildWithOptions = program;
var singletonArray = (function singletonArray$(a) {
  /* singleton-array index.sibilant:35:0 */

  return [ a ];
});
var compileFromArray = (function compileFromArray$(array, options) {
  /* compile-from-array index.sibilant:38:0 */

  return Arr.mapAllSerial(nth(2, Sibilant.transpile), array);
});