define("Myfirebase", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
        //Vue Router
        this.router = router;
    }

    /**
     * Login with email and password.
     *
     * @param {object} user
     */


    _createClass(Auth, [{
        key: 'loginWithEmailAndPassowrd',
        value: function loginWithEmailAndPassowrd(user) {
            this.store.commit('auth/login', {
                email: user.email,
                password: user.password,
                result: user.result,
                error: user.error
            });
        }

        /**
         * SignOut.
         *
         */

    }, {
        key: 'logout',
        value: function logout() {
            this.store.commit('auth/logout');
        }

        /**
         * Register with Email and password.
         *
         * @param {object} user
         */

    }, {
        key: 'registerWithEmailAndPassword',
        value: function registerWithEmailAndPassword(user) {
            this.store.commit('auth/register', {
                email: user.email,
                password: user.password,
                result: user.result,
                error: user.error
            });
        }

        /**
         * Register using google account.
         *
         * @param {function} callBack
         *
         */

    }, {
        key: 'signInWithGoogle',
        value: function signInWithGoogle(callBack) {
            this.store.commit('auth/signInGoogle', callBack);
        }

        /**
         * Register using facebook account.
         *
         * @param {function} callBack
         *
         */

    }, {
        key: 'signInWithFacebook',
        value: function signInWithFacebook(callBack) {
            this.store.commit('auth/signInFacebook', callBack);
        }

        /**
         *
         *
         */

    }, {
        key: 'signInWithGithub',
        value: function signInWithGithub(callBack) {
            this.store.commit('auth/signInGithub', callBack);
        }

        /**
         *
         *
         */

    }, {
        key: 'signInWithTwitter',
        value: function signInWithTwitter(callBack) {
            this.store.commit('auth/signInTwitter', callBack);
        }

        /**
         * Auth state changed.
         * 
         * @param {Object} Distination redicrection
         * @param {Function} callback
         */

    }, {
        key: 'state',
        value: function state(distination) {
            var _this = this;

            this.auth.onAuthStateChanged(function (user) {
                if (user) {
                    distination.then(user);
                    if (distination.forward) {
                        _this.router.push(distination.forward);
                        _this.router.go(1);
                    }
                } else {
                    distination.catch();
                    if (distination.redirect) {
                        _this.router.push(distination.redirect);
                        _this.router.go(1);
                    }
                }
            });
        }

        /**
         * Auth check state changed
         *
         * @param {object} callBack
         */

    }, {
        key: 'check',
        value: function check(callBack) {
            this.auth.onAuthStateChanged(function (user) {
                if (user) {
                    callBack.then(user);
                } else {
                    callBack.catch();
                }
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
         */

    }, {
        key: 'user',
        value: function user() {
            return this.auth.currentUser;
        }

        /**
         * Update profile picture
         *
         * @param {object} image
         */

    }, {
        key: 'updateProfilePicture',
        value: function updateProfilePicture(image) {
            this.store.commit('auth/updateProfilePicture', image);
        }
    }]);

    return Auth;
}();

exports.default = Auth;

/***/ }),
/* 1 */
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
         * upload a new file.
         *
         * @param {object} file
         */

    }, {
        key: 'upload',
        value: function upload(file) {
            this.store.commit('storage/uploadFile', file);
        }

        /**
         * download file.
         * 
         * @param {object} reference
         */

    }, {
        key: 'getDownloadURL',
        value: function getDownloadURL(file) {
            var promis = this.get().ref().child(file.ref).getDownloadURL();
            promis.then(function (url) {
                file.result(url);
            }).catch(function (error) {
                file.error(error);
            });
        }
        /**
         * delete file.
         *
         * @param {object} file
         */

    }, {
        key: 'delete',
        value: function _delete(file) {
            this.store.commit('storage/deleteFile', file);
        }
    }]);

    return Storage;
}();

exports.default = Storage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _auth = __webpack_require__(0);

var _auth2 = _interopRequireDefault(_auth);

var _storage = __webpack_require__(1);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// late binding
var Vue = void 0;

var mixin = {
    created: function created() {
        //
    }
};

var Myfirebase = {
    install: function install(Vue, options) {
        var store = options.store,
            router = options.router;

        Vue.mixin(mixin);
        Vue.prototype.$auth = new _auth2.default(options.store, options.router);
        Vue.prototype.$storage = new _storage2.default(options.store);
    }
};

exports.default = Myfirebase.install;

/***/ })
/******/ ])});;