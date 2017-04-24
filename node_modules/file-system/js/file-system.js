var fs = require("fs"),
    Path = require("path"),
    chokidar = require("chokidar"),
    lit(EventEmitter) = require("events");
specify(FSNode, extend(EventEmitter.prototype));
defDescription(FSNode, path(fs), init(EventEmitter.call(this)), gett(stats, stat(this.path)), defGeneric(watch, path(fs), fs.watch(path)));
specify(File, extend(FSNode));
describe(File, gett(value, readFile(this.path)), sett(value, v, then(Promise.resolve(v), v, writeFile(this.path, v))), gett(string, readFile(this.path, "utf8")), sett(string, s, then(Promise.resolve(s), s, writeFile(this.path, s))), defGeneric(getValue, path(), readFile(path)), defGeneric(setValue, value("")(path), thenDo(writeFile(path, value), this)), gett(readStream, this.getReadStream()), gett(writeStream, this.getWriteStream()), gmth(getReadStream, path(), fs.createReadStream(path)), gmth(getWriteStream, path(), fs.createWriteStream(path)), gmth(write, null), gmth(read, null), gmth(pipe, null));
specify(Directory, extend(FSNode));
describe(Directory, defGeneric(set, path(value, type(File))), defGeneric(get, null), defGeneric(insert, path(type(File))), defGeneric(each, f()), defGeneric(map, f()), gett(keys, readdir(this.path)), gett(children, this.keys.then(fmap(=>(k(), Path.join(this.path, k))))));
specify(FileSystem, extend(EventEmitter.prototype));
var plift = (function plift$(f) {
  /* plift ../file-system/sib/file-system.sibilant:11:0 */

  return promised(args(), f.apply(this, [ args, =>(err(data), (function() {
    if (err) {
      return reject(err);
    } else {
      return resolve(data);
    }
  }).call(this)) ]));
});
var stat = plift(fs.stat),
    mkdir = plift(fs.mkdir),
    readFile = plift(fs.readFile),
    writeFile = plift(fs.writeFile),
    readdir = plift(fs.readdir);
var fillSubDir = (function fillSubDir$(p_subPath$1, seg) {
  /* fill-sub-dir ../file-system/sib/file-system.sibilant:21:0 */

  var p = p_subPath$1[0],
      subPath = p_subPath$1[1];

  return [ catch(thenDo(p, mkdir(subPath))), Path.join(subPath, seg) ];
});
var _directory__QUERY = =>(stats(), stats.isDirectory());
var emit = R.invoker(3, "emit");
var biCurry = R.curryN(2);
var _ = R._;
var notSingleDot = =>(token(), !(token === ".")),
    findValue = =>(seq(_tree), _tree.find(seq).value),
    tokenize = =>($fpipe(), $fpipe.split("/").filter(notSingleDot));
defLitMacro(defCurried, name.apply(this, [ args ].concat(body)), {
  file: "../file-system/sib/file-system.sibilant",
  token: "(",
  type: "expression",
  line: 47,
  col: 3,
  contents: [ {
    file: "../file-system/sib/file-system.sibilant",
    token: "property",
    type: "literal",
    line: 47,
    col: 4,
    contents: [],
    specials: 0,
    precedingIgnored: []
  }, name, {
    file: "../file-system/sib/file-system.sibilant",
    token: "(",
    type: "expression",
    line: 47,
    col: 19,
    contents: [ {
      file: "../file-system/sib/file-system.sibilant",
      token: "R.curry",
      type: "literal",
      line: 47,
      col: 20,
      contents: [],
      specials: 0,
      precedingIgnored: []
    }, {
      file: "../file-system/sib/file-system.sibilant",
      token: "(",
      type: "expression",
      line: 47,
      col: 28,
      contents: [ {
        file: "../file-system/sib/file-system.sibilant",
        token: "lambda",
        type: "literal",
        line: 47,
        col: 29,
        contents: [],
        specials: 0,
        precedingIgnored: []
      }, args ].concat(body),
      precedingIgnored: [ {
        file: "../file-system/sib/file-system.sibilant",
        token: " ",
        type: "whitespace",
        line: 47,
        col: 27,
        contents: []
      } ],
      specials: 0,
      end: undefined,
      closed: true,
      closingIgnored: []
    } ],
    precedingIgnored: [ {
      file: "../file-system/sib/file-system.sibilant",
      token: " ",
      type: "whitespace",
      line: 47,
      col: 18,
      contents: []
    } ],
    specials: 0,
    end: undefined,
    closed: true,
    closingIgnored: []
  } ],
  precedingIgnored: [],
  specials: 0,
  end: undefined,
  closed: true,
  closingIgnored: []
});
describe(FileSystem, root("."), init(root(_tree(create(TreeMap)()))), defCurried(_discoverNode, path(seq, _tree, fs, stats), _tree.set(seq, (function() {
  if (stats.isDirectory()) {
    return create(Directory)(path);
  } else {
    return create(File)(path);
  }
}).call(this))), defGeneric(find, path([ _tree, _discoverNode, root ], [ relPath(Path.resolve(root, path)), seq(tokenize(relPath)), node(findValue(seq, _tree)) ], fs(this)), (function() {
  if (node) {
    return Promise.resolve(node);
  } else {
    return stat(relPath).then(_discoverNode(relPath, seq, _tree, fs));
  }
}).call(this)), defGeneric(watch, path([ root ], relPath(Path.resolve(root, path)), fs(this)), then(fs.find(path, [], relPath), node, on(chokidar.watch(node.path), "all", eventName(changedPath, stats), fs.find(changedPath, []).then(emit(node, eventName))), node)), defGeneric(insert, path(relPath(.resolve()), type(File), fs(this)), catch(fs.find(path), let_(seq(tokenize(path))(fileName(seq.pop())), thenDo(seq.reduce(fillSubDir, [ Promise.resolve(), "./" ])[0], create(type)(path, fs).setValue())))), defGeneric(set, path(v, type(File), fs(this)), then(fs.insert(path, type, fs), node, node.setValue(v))));