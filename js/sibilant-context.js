

(function(a, b, c) {
  /* inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;
var vm = require("vm"),
    sibilant = require("sibilant");
defGeneric(createContext, obj({  })(), var context = vm.createContext({  }, "name");, context._sibilant = sibilant;
context.module = module;
context.require = require;
context.context = context;, Object.keys(global).forEach((function(key) {
  /* inc/vm.sibilant:9:2 */

  return context[key] = global[key];
})), Object.keys(obj).forEach((function(key) {
  /* inc/vm.sibilant:10:2 */

  return context[key] = obj[key];
})), context);
var sibilant = require("sibilant"),
    vm = require("vm"),
    fs = require("fs"),
    { 
  create,
  extend,
  partiallyApplyAfter,
  mixin
 } = require("./util.sibilant");
exports.createContext = createContext;
var context = createContext();
var plift = (function plift$(f) {
  /* plift src/sibilant-context.sibilant:13:0 */

  return (...args) => {
  	
    return (new Promise((success, fail) => {
    	
      var resolve = success,
          reject = fail;
      return f.apply(this, [ ...args, (err, data) => {
      	
        return (function() {
          if (err) {
            return reject(err);
          } else {
            return resolve(data);
          }
        }).call(this);
      
      } ]);
    
    }));
  
  };
});
var readFile = plift(fs.readFile);
var evalFile = (function evalFile$(path = this.path, _context = this._context, name = this.name) {
  /* eval-file inc/core/function-expressions.sibilant:25:8 */

  return (new Promise((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    console.log("path", path);
    sibilant.dir = path;
    return readFile(path, "utf8").then(partiallyApplyAfter(evalString, name)).then((nil) => {
    	
      return sibilant.dir = ".";
    
    });
  
  }));
});
defGeneric(evalString, sibilantString(_context, name), vm.runInContext(sibilant(sibilantString).js, _context, name));
defGeneric(evalStream, null);
const SibilantContext = { 
  symbol:Symbol("SibilantContext"),
  init( _context = createContext() ){ 
    
      this._context = _context;
      return this;
    
   },
  name:"kit",
  _context:context,
  _sibilant:sibilant,
  evalString,
  evalFile,
  evalStream
 };
exports.SibilantContext = SibilantContext;
mixin(SibilantContext, exports);
context.SibilantContext = SibilantContext;