

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;
var R = require("ramda");
var R = require("ramda"),
    assert = require("assert"),
    { 
  cond,
  create,
  extend,
  mixin
 } = require("kit/js/util");
var testing__QUERY = true;
var identity = (function identity$(a) {
  /* identity inc/util.sibilant:4:0 */

  return a;
});
var setValue = R.curry((v, o) => {
	
  return o.value = v;

});
var reducePromise = R.curry((f, a) => {
	
  return a.reduce(f, [ Promise.resolve(), "" ]);

});
var timeout = (function timeout$(t) {
  /* timeout node_modules/kit/inc/core/function-expressions.sibilant:25:8 */

  return (new Promise((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return setTimeout(success, t);
  
  }));
});
var onceThen = (function onceThen$(event, emitter) {
  /* once-then inc/util.sibilant:26:0 */

  console.log("once then", event, emitter);
  return (new Promise((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return emitter.once(event, success);
  
  }));
});
var testing__QUERY = true;
const Tree={ 
  symbol:Symbol("Tree")
 };
mixin({ 
  value:null,
  parent:null,
  depth:0,
  branch__QUERY( value = this.value ){ 
    
      console.log("value?", value);
      return null === value;
    
   },
  leaf__QUERY( value = this.value ){ 
    
      return !(null === value);
    
   },
  descend( seq = this.seq,f = this.f,tree = this ){ 
    
      return (function() {
        if (0 === seq.length) {
          return tree;
        } else {
          return f(tree, seq);
        }
      }).call(this);
    
   },
  find( seq = this.seq,tree = this ){ 
    
      console.log(tree);
      return (function() {
        if (0 === seq.length) {
          return tree;
        } else {
          return tree._find(seq);
        }
      }).call(this);
    
   },
  has( seq = this.seq,tree = this ){ 
    
      return (function() {
        if (tree.find(seq)) {
          return true;
        } else {
          return false;
        }
      }).call(this);
    
   },
  insert( seq = this.seq,tree = this ){ 
    
      console.log(tree);
      return (function() {
        if (0 === seq.length) {
          tree.value = undefined;
          return tree;
        } else {
          return (function(node) {
            /* node_modules/kit/inc/macros.sibilant:165:9 */
          
            node.depth = (1 + tree.depth);
            return node.insert(seq.slice(1));
          })(tree._insert(seq));
        }
      }).call(this);
    
   },
  set( seq = this.seq,value = this.value,tree = this ){ 
    
      return tree.insert(seq).value = value;
    
   },
  add( key = this.key,tree = this,_children = tree._children ){ 
    
      return (_children.get(key) || create(tree)(null, tree));
    
   },
  traverseBranches__QUERY:true,
  each( f = this.f,traverseBranches__QUERY = this.traverseBranches__QUERY,leaf__QUERY = this.leaf__QUERY,_children = this._children ){ 
    
      var preorderTraverse = (function preorderTraverse$(node, k) {
        /* preorder-traverse sibilant/tree-map.sibilant:48:12 */
      
        f(node, k);
        return node.each(f);
      });
      return (function() {
        if (traverseBranches__QUERY) {
          return _children.each(preorderTraverse, true, leaf__QUERY, _children);
        } else {
          return _children.each((node, k) => {
          	
            return (function() {
              if (leaf__QUERY(node)) {
                return f(node, k);
              } else {
                return node.each(f, false, leaf, _children);
              }
            }).call(this);
          
          });
        }
      }).call(this);
    
   }
 }, Tree);
var TreeMap = extend(Tree, { 
  symbol:Symbol("TreeMap")
 });
mixin({ 
  init( value = this.value,parent = this.parent,_children = (new Map()) ){ 
    
      this.value = value;this.parent = parent;this._children = _children;
      return this;
    
   },
  _find( seq = this.seq,tree = this,_children = tree._children,node = _children.get(seq[0]) ){ 
    
      return (function() {
        if (node) {
          return node.find(seq.slice(1));
        } else {
          return false;
        }
      }).call(this);
    
   },
  _insert( seq = this.seq,_children = this._children,tree = this,node = tree.add(seq[0]) ){ 
    
      _children.set(seq[0], node);
      return node;
    
   }
 }, TreeMap);
var fs = require("fs"),
    Path = require("path"),
    chokidar = require("chokidar"),
    { 
  EventEmitter
 } = require("events");
var File = extend(EventEmitter.prototype, { 
  symbol:Symbol("File")
 });
mixin({ 
  init( path = this.path,fs = this.fs ){ 
    
      this.path = path;this.fs = fs;
      EventEmitter.call(this);
      return this;
    
   },
  get value(  ){ 
    
      return readFile(this.path);
    
   },
  set value( v ){ 
    
      return writeFile(this.path, v);
    
   },
  getValue( path = this.path ){ 
    
      return readFile(path);
    
   },
  setValue( value = "",path = this.path ){ 
    
      return writeFile(path, value).then((nil) => {
      	
        return this;
      
      });
    
   },
  get readStream(  ){ 
    
      return this.getReadStream();
    
   },
  get writeStream(  ){ 
    
      return this.getWriteStream();
    
   },
  getReadStream( path = this.path ){ 
    
      return fs.createReadStream(path);
    
   },
  getWriteStream( path = this.path ){ 
    
      return fs.createWriteStream(path);
    
   },
  write(  ){ 
    
   },
  read(  ){ 
    
   },
  pipe(  ){ 
    
   }
 }, File);
var Directory = extend(EventEmitter.prototype, { 
  symbol:Symbol("Directory")
 });
mixin({ 
  init( path = this.path,fs = this.fs ){ 
    
      this.path = path;this.fs = fs;
      EventEmitter.call(this);
      return this;
    
   },
  setValue( value = [],path = this.path ){ 
    
      return (function() {
        if ((value && "object" === typeof value && "Array" === value.constructor.name)) {
          return Promise.all(value.map((k) => {
          	
            return mkdir(Path.join(path, k));
          
          })).then((nil) => {
          	
            return this;
          
          });
        } else {
          return mkdir(Path.join(path, value));
        }
      }).call(this);
    
   },
  getValue( path = this.path ){ 
    
   },
  set( path = this.path,value = this.value,type = File ){ 
    
   },
  insert( path = this.path,type = File ){ 
    
   },
  each( f = this.f ){ 
    
   },
  map( f = this.f ){ 
    
   },
  get keys(  ){ 
    
      return readdir(this.path);
    
   },
  get children(  ){ 
    
      return this.keys.map((k) => {
      	
        return Path.join(this.path, k);
      
      });
    
   }
 }, Directory);
var discoverNode = R.curry((path, seq, _tree, fs, stats) => {
	
  return _tree.set(seq, (function() {
    if (stats.isDirectory()) {
      return create(Directory)(path);
    } else {
      return create(File)(path);
    }
  }).call(this));

});
var FileSystem = extend(EventEmitter.prototype, { 
  symbol:Symbol("FileSystem")
 });
var plift = (function plift$(f) {
  /* plift sibilant/file-system.sibilant:73:0 */

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
var stat = plift(fs.stat),
    mkdir = plift(fs.mkdir),
    readFile = plift(fs.readFile),
    writeFile = plift(fs.writeFile),
    readdir = plift(fs.readdir);
var fillSubDir = (function fillSubDir$(p_subPath$1, seg) {
  /* fill-sub-dir sibilant/file-system.sibilant:83:0 */

  var p = p_subPath$1[0],
      subPath = p_subPath$1[1];

  return [ p.then((nil) => {
  	
    return mkdir(subPath);
  
  }).catch((e) => {
  	
    
  
  }), Path.join(subPath, seg) ];
});
var _directory__QUERY = (stats) => {
	
  return stats.isDirectory();

};
var biCurry = R.curryN(2);
var _ = R._;
mixin({ 
  init( root = this.root,_tree = create(TreeMap)() ){ 
    
      this.root = root;this._tree = _tree;
      return this;
    
   },
  find( path = this.path,_tree = this._tree,seq = path.split("/").filter((token) => {
  	
    return !(token === ".");
  
  }),node = _tree.find(seq).value,fs = this ){ 
    
      return (function() {
        if (node) {
          return Promise.resolve(node);
        } else {
          return stat(path).then(discoverNode(path, seq, _tree, fs));
        }
      }).call(this);
    
   },
  watch( path = this.path,fs = this ){ 
    
      return fs.find(path).then((node) => {
      	
        chokidar.watch(path).on("all", (eventName, path, stats) => {
        	
          return fs.find(Path.relative(fs.root, path)).then((r) => {
          	
            return node.emit(eventName, r);
          
          });
        
        }).once("error", (err) => {
        	
          console.log("error on", "all", "of", "chokidar.watch(path)", "given", "eventName(path, stats)");
          return console.log(err);
        
        });
        return node;
      
      });
    
   },
  insert( path = this.path,type = File,fs = this ){ 
    
      return fs.find(path).catch((e) => {
      	
        return (function(seq) {
          /* node_modules/kit/inc/macros.sibilant:165:9 */
        
          return (function(fileName) {
            /* node_modules/kit/inc/macros.sibilant:165:9 */
          
            return seq.reduce(fillSubDir, [ Promise.resolve(), "./" ])[0].then((nil) => {
            	
              return create(type)(path, fs).setValue();
            
            });
          })(seq.pop());
        })(path.split("/"));
      
      });
    
   },
  set( path = this.path,v = this.v,type = File,fs = this ){ 
    
      return fs.insert(path, type, fs).then((node) => {
      	
        return node.setValue(v);
      
      });
    
   }
 }, FileSystem);
exports.FileSystem = FileSystem;