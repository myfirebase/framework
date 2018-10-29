define("Myfirebase", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractModel = function () {
  function AbstractModel() {
    _classCallCheck(this, AbstractModel);
  }

  _createClass(AbstractModel, [{
    key: 'defineProperties',


    /**
     * Define subclass propertires.
     *
     * @return void
     */
    value: function defineProperties() {
      var keys = Object.keys(this);
      var values = Object.values(this);
      keys.splice(0, 1);
      values.splice(0, 1);
      var props = {};
      for (var i = 0; i < keys.length; i++) {
        props[keys[i]] = values[i];
      }

      this.props = props;
    }

    /**
     * Ensure document key.
     *
     * @param {string} key
     */

  }, {
    key: 'ensureKey',
    value: function ensureKey(key) {
      if (key === undefined) {
        throw new Error('Key is undefined');
      }
    }

    /**
     * Validate properties.
     *
     * @var {*} props
     *
     * @return void
     */

  }, {
    key: 'validate',
    value: function validate(props) {
      var _this = this;

      var keys = Object.getOwnPropertyNames(props);
      this.required().forEach(function (el) {
        var result = keys.find(function (r) {
          return el === r && _this.props[r] !== '';
        });
        if (result === undefined) {
          throw new Error('Property is required');
        }
      });
    }
  }]);

  return AbstractModel;
}();

exports.default = AbstractModel;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {

  /**
   * @constructor
   * @param {object} store
   * @param {object} router
   */
  function Auth(store, router) {
    _classCallCheck(this, Auth);

    // store
    this.store = store;

    // Auth State
    this.auth = store.state.auth.auth;

    // Vue Router
    this.router = router;
  }

  /**
   * Login with email and password.
   *
   * @param {string} email
   * @param {string} password
   *
   * @return Promise
   */


  _createClass(Auth, [{
    key: 'loginWithEmailAndPassword',
    value: function loginWithEmailAndPassword(email, password) {
      return this.store.dispatch('auth/login', {
        email: email,
        password: password
      });
    }

    /**
     * SignOut.
     *
     * @return Promise
     */

  }, {
    key: 'logout',
    value: function logout() {
      return this.store.dispatch('auth/logout');
    }

    /**
     * Register with an Email and password.
     *
     * @param {object} user
     */

  }, {
    key: 'registerWithEmailAndPassword',
    value: function registerWithEmailAndPassword(email, password) {
      return this.store.dispatch('auth/register', {
        email: email,
        password: password
      });
    }

    /**
     * SignIn using google account.
     *
     * @return Promise
     */

  }, {
    key: 'signInWithGoogle',
    value: function signInWithGoogle() {
      return this.store.dispatch('auth/signInGoogle');
    }

    /**
     * SignIn using facebook account.
     *
     * @return Promise
     *
     */

  }, {
    key: 'signInWithFacebook',
    value: function signInWithFacebook() {
      return this.store.dispatch('auth/signInFacebook');
    }

    /**
     * SignIn using github account.
     *
     * @return Promise
     */

  }, {
    key: 'signInWithGithub',
    value: function signInWithGithub() {
      return this.store.dispatch('auth/signInGithub');
    }

    /**
     * SignIn using Twitter account.
     *
     * @return Promise
     */

  }, {
    key: 'signInWithTwitter',
    value: function signInWithTwitter() {
      return this.store.dispatch('auth/signInTwitter');
    }

    /**
     * Auth state changed.
     *
     * @param {string} next
     * @param {string} redirect
     *
     * @return Promise
     */

  }, {
    key: 'state',
    value: function state(next, redirect) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.auth.onAuthStateChanged(function (user) {
          if (typeof next !== 'string' || typeof redirect !== 'string') {
            reject('Router parameter should be a string');
          }

          if (user) {
            resolve(user);
            _this.router.push(next);
            _this.router.go(1);
          } else {
            resolve(null);
            _this.router.push(redirect);
            _this.router.go(1);
          }
        });
      });
    }

    /**
     * Check if the auth stat has been changed.
     *
     * @return Promise
     */

  }, {
    key: 'check',
    value: function check() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.auth.onAuthStateChanged(function (user) {
          if (user) {
            resolve(user);
          } else {
            reject('Error');
          }
        });
      });
    }

    /**
     * Get auth object.
     */

  }, {
    key: 'getAuth',
    value: function getAuth() {
      return this.auth;
    }

    /**
     * Get the current user.
     *
     * @return {*} user|null
     */

  }, {
    key: 'user',
    value: function user() {
      if (this.auth.currentUser) {
        return this.auth.currentUser;
      }
      var user = void 0;
      this.auth.onAuthStateChanged(function (authUser) {
        if (authUser) {
          user = authUser;
        } else {
          user = null;
        }
      });
      return user;
    }

    /**
     * Update profile picture
     *
     * @param {object} image
     *
     * @return Promise
     */

  }, {
    key: 'updateProfilePicture',
    value: function updateProfilePicture(image) {
      return this.store.dispatch('auth/updateProfilePicture', image);
    }
  }]);

  return Auth;
}();

exports.default = Auth;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractModel2 = __webpack_require__(0);

var _AbstractModel3 = _interopRequireDefault(_AbstractModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatabaseModel = function (_AbstractModel) {
  _inherits(DatabaseModel, _AbstractModel);

  /**
   * Create new DatabaseModel instance.
   *
   * @constructor
   *
   * @param {*} ref
   */
  function DatabaseModel(ref) {
    _classCallCheck(this, DatabaseModel);

    var _this = _possibleConstructorReturn(this, (DatabaseModel.__proto__ || Object.getPrototypeOf(DatabaseModel)).call(this));

    _this.ref = ref;
    return _this;
  }

  /**
   * Initialize.
   *
   * @return DatabaseModel
   */


  _createClass(DatabaseModel, [{
    key: 'init',
    value: function init() {
      this.defineProperties();
      return this;
    }

    /**
     * Add a document to the firebase database.
     *
     * @return Promise
     */

  }, {
    key: 'push',
    value: function push() {
      this.defineProperties();
      this.validate(this.props);
      delete this.props['props'];
      return this.ref.push(this.props);
    }

    /**
     * Update a document in the firebase database.
     *
     * @param {string} key
     *
     * @return Promise
     */

  }, {
    key: 'update',
    value: function update(key) {
      this.ensureKey(key);
      this.defineProperties();

      return this.ref.child(key).update(this.props);
    }

    /**
     * Remove a document in the firebase database.
     *
     * @param {string} key
     *
     * @return Promise
     */

  }, {
    key: 'remove',
    value: function remove(key) {
      this.ensureKey(key);

      return this.ref.child(key).remove();
    }
  }]);

  return DatabaseModel;
}(_AbstractModel3.default);

exports.default = DatabaseModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractModel2 = __webpack_require__(0);

var _AbstractModel3 = _interopRequireDefault(_AbstractModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirestoreModel = function (_AbstractModel) {
  _inherits(FirestoreModel, _AbstractModel);

  /**
   * Create new DatabaseModel instance.
   *
   * @constructor
   *
   * @param {*} ref
   */
  function FirestoreModel(ref) {
    _classCallCheck(this, FirestoreModel);

    var _this = _possibleConstructorReturn(this, (FirestoreModel.__proto__ || Object.getPrototypeOf(FirestoreModel)).call(this));

    _this.ref = ref;
    return _this;
  }

  /**
   * Initialize.
   *
   * @return FirestoreModel
   */


  _createClass(FirestoreModel, [{
    key: 'init',
    value: function init() {
      this.defineProperties();
      return this;
    }

    /**
     * Add new document to a collection.
     *
     * @return Promise
     */

  }, {
    key: 'add',
    value: function add() {
      this.defineProperties();
      this.validate(this.props);
      delete this.props['props'];
      return this.ref.add(this.props);
    }

    /**
     * Remove a document.
     *
     * @param {string} key
     *
     * @return Promise
     */

  }, {
    key: 'delete',
    value: function _delete(key) {
      this.ensureKey(key);

      return this.ref.doc(key).delete();
    }

    /**
     * Update a document in a collection.
     *
     * @param {string} key
     *
     * @return Promise
     */

  }, {
    key: 'update',
    value: function update(key) {
      this.ensureKey(key);

      return this.ref.doc(key).update(this.props);
    }
  }]);

  return FirestoreModel;
}(_AbstractModel3.default);

exports.default = FirestoreModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Database = function () {
  /**
   * New Database instance
   * @param {object} store
   */
  function Database(store) {
    _classCallCheck(this, Database);

    this.database = store.state.database;
  }

  /**
   * Get firebase database root ref.
   */


  _createClass(Database, [{
    key: "get",
    value: function get() {
      return this.database;
    }
  }]);

  return Database;
}();

exports.default = Database;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firestore = function () {
  /**
   * @constructor
   * @param {object} store
   */
  function Firestore(store) {
    _classCallCheck(this, Firestore);

    this.firestore = store.state.firestore;
  }

  /**
   * Get firestore
   */


  _createClass(Firestore, [{
    key: "get",
    value: function get() {
      return this.firestore;
    }
  }]);

  return Firestore;
}();

exports.default = Firestore;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {

  /**
   * @constructor
   * @param {object} store
   */
  function Storage(store) {
    _classCallCheck(this, Storage);

    this.store = store;
  }

  /**
   * retrieve storage object.
   */


  _createClass(Storage, [{
    key: 'get',
    value: function get() {
      return this.store.state.storage.storage;
    }

    /**
     * Upload a file.
     *
     * @param {object} file
     */

  }, {
    key: 'upload',
    value: function upload(file) {
      this.store.commit('storage/uploadFile', file);
    }

    /**
     * Download a file.
     *
     * @param {string} file
     */

  }, {
    key: 'getDownloadURL',
    value: function getDownloadURL(ref) {
      return this.get().ref().child(ref).getDownloadURL();
    }

    /**
     * Delete file.
     *
     * @param {string} file
     */

  }, {
    key: 'delete',
    value: function _delete(file) {
      return this.store.dispatch('storage/deleteFile', file);
    }

    /**
     * Upload multiple files.
     *
     * @param {object} files
     */

  }, {
    key: 'uploadMultiple',
    value: function uploadMultiple(files) {
      this.store.commit('storage/uploadFiles', files);
    }
  }]);

  return Storage;
}();

exports.default = Storage;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirestoreModel = exports.DatabaseModel = undefined;

var _auth = __webpack_require__(1);

var _auth2 = _interopRequireDefault(_auth);

var _storage = __webpack_require__(6);

var _storage2 = _interopRequireDefault(_storage);

var _database = __webpack_require__(4);

var _database2 = _interopRequireDefault(_database);

var _firestore = __webpack_require__(5);

var _firestore2 = _interopRequireDefault(_firestore);

var _DatabaseModel = __webpack_require__(2);

var _DatabaseModel2 = _interopRequireDefault(_DatabaseModel);

var _FirestoreModel = __webpack_require__(3);

var _FirestoreModel2 = _interopRequireDefault(_FirestoreModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mixin = {
  created: function created() {
    //
  }
};

var auth = void 0;

var storage = void 0;

var database = void 0;

var firestore = void 0;

var Myfirebase = {
  install: function install(Vue, options) {
    /**
     * Injetct store and router via Myfirebase options.
     */
    var store = options.store,
        router = options.router,
        middlewares = options.middlewares;


    Vue.mixin(mixin);

    var VueStore = store;
    auth = new _auth2.default(VueStore, options.router);
    storage = new _storage2.default(VueStore);
    database = new _database2.default(VueStore).get();
    firestore = new _firestore2.default(VueStore).get();

    /**
     * Initialize Firebase Auth global instance.
     * Initialize Firebase Cloud Storage (FCS).
     * Initialize Firebase realtime Database.
     * @var $auth
     * @var $storage
     * @var $database
     */
    Vue.prototype.$auth = auth;
    Vue.prototype.$storage = storage;
    Vue.prototype.$myDatabase = database;
    Vue.prototype.$myFirestore = firestore;

    Vue.auth = auth;
    Vue.database = database;
    Vue.storage = storage;
    Vue.firestore = firestore;
    Vue.store = VueStore;

    /**
     * Global Navigation Guards.
     */
    router.beforeEach(function (to, from, next) {
      var myfirebase = { auth: auth, storage: storage, database: database, firestore: firestore };
      var actions = { to: to, from: from, next: next

        // register global guards
      };middlewares.forEach(function (call) {
        call(myfirebase, actions);
      });
    });
  }
};

exports.DatabaseModel = _DatabaseModel2.default;
exports.FirestoreModel = _FirestoreModel2.default;
exports.default = Myfirebase.install;

/***/ })
/******/ ])});;