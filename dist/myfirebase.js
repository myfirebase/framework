/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("var Auth = function Auth(store, router) {\n    // store\n    this.store = store\n    // Auth State\n    this.auth = store.state.auth.auth\n    //Vue Router\n    this.router = router\n};\n\n/**\n * Login with email and password.\n *\n * @param {object} user\n */\nAuth.prototype.loginWithEmailAndPassowrd = function loginWithEmailAndPassowrd (user) {\n    this.store.commit('auth/login', {\n        email: user.email,\n        password: user.password,\n        result: user.result,\n        error: user.error\n    })\n};\n\n/**\n * SignOut.\n *\n */\nAuth.prototype.logout = function logout () {\n    this.store.commit('auth/logout')\n};\n\n/**\n * Register with Email and password.\n *\n * @param {object} user\n */\nAuth.prototype.registerWithEmailAndPassword = function registerWithEmailAndPassword (user) {\n    this.store.commit('auth/register', {\n        email: user.email,\n        password: user.password,\n        result: user.result,\n        error: user.error\n    })\n};\n\n/**\n * Register using google account.\n *\n * @param {function} callBack\n *\n */\nAuth.prototype.signInWithGoogle = function signInWithGoogle (callBack) {\n    this.store.commit('auth/signInGoogle', callBack);\n};\n\n/**\n * Register using facebook account.\n *\n * @param {function} callBack\n *\n */\nAuth.prototype.signInWithFacebook = function signInWithFacebook (callBack) {\n    this.store.commit('auth/signInFacebook', callBack)\n};\n\n/**\n *\n *\n */\nAuth.prototype.signInWithGithub = function signInWithGithub (callBack) {\n    this.store.commit('auth/signInGithub', callBack)\n};\n\n/**\n *\n *\n */\nAuth.prototype.signInWithTwitter = function signInWithTwitter (callBack) {\n    this.store.commit('auth/signInTwitter', callBack)\n};\n\n/**\n * Auth state changed.\n * \n * @param {Object} Distination redicrection\n * @param {Function} callback\n */\nAuth.prototype.state = function state (distination) {\n        var this$1 = this;\n\n    this.auth.onAuthStateChanged(function (user) {\n        if (user) {\n            distination.then(user)\n            if (distination.forward) {\n                this$1.router.push(distination.forward)\n                this$1.router.go(1)\n            }\n        } else {\n            distination.catch()\n            if (distination.redirect) {\n                this$1.router.push(distination.redirect)\n                this$1.router.go(1)\n            }\n        }\n    })\n};\n\n/**\n * Auth check state changed\n *\n * @param {object} callBack\n */\nAuth.prototype.check = function check (callBack) {\n    this.auth.onAuthStateChanged(function (user) {\n        if (user) {\n            callBack.then(user)\n        } else {\n            callBack.catch()\n        }\n    })\n};\n\n/**\n * Get auth object.\n */\nAuth.prototype.getAuth = function getAuth () {\n    return this.auth\n};\n\n/**\n * Get the current user.\n */\nAuth.prototype.user = function user () {\n    return this.auth.currentUser\n};\n\n/**\n * Update profile picture\n *\n * @param {object} image\n */\nAuth.prototype.updateProfilePicture = function updateProfilePicture (image){\n    this.store.commit('auth/updateProfilePicture', image)\n};\n\n/* harmony default export */ exports[\"a\"] = Auth;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXV0aC9hdXRoLmpzPzBkMGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUsIHJvdXRlcikge1xuICAgICAgICAvLyBzdG9yZVxuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICAgICAgLy8gQXV0aCBTdGF0ZVxuICAgICAgICB0aGlzLmF1dGggPSBzdG9yZS5zdGF0ZS5hdXRoLmF1dGhcbiAgICAgICAgLy9WdWUgUm91dGVyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdXNlclxuICAgICAqL1xuICAgIGxvZ2luV2l0aEVtYWlsQW5kUGFzc293cmQodXNlcikge1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYXV0aC9sb2dpbicsIHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICByZXN1bHQ6IHVzZXIucmVzdWx0LFxuICAgICAgICAgICAgZXJyb3I6IHVzZXIuZXJyb3JcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaWduT3V0LlxuICAgICAqXG4gICAgICovXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYXV0aC9sb2dvdXQnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHdpdGggRW1haWwgYW5kIHBhc3N3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHVzZXJcbiAgICAgKi9cbiAgICByZWdpc3RlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHVzZXIpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ2F1dGgvcmVnaXN0ZXInLCB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgcmVzdWx0OiB1c2VyLnJlc3VsdCxcbiAgICAgICAgICAgIGVycm9yOiB1c2VyLmVycm9yXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgdXNpbmcgZ29vZ2xlIGFjY291bnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsQmFja1xuICAgICAqXG4gICAgICovXG4gICAgc2lnbkluV2l0aEdvb2dsZShjYWxsQmFjaykge1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYXV0aC9zaWduSW5Hb29nbGUnLCBjYWxsQmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgdXNpbmcgZmFjZWJvb2sgYWNjb3VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxCYWNrXG4gICAgICpcbiAgICAgKi9cbiAgICBzaWduSW5XaXRoRmFjZWJvb2soY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ2F1dGgvc2lnbkluRmFjZWJvb2snLCBjYWxsQmFjaylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICovXG4gICAgc2lnbkluV2l0aEdpdGh1YihjYWxsQmFjaykge1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYXV0aC9zaWduSW5HaXRodWInLCBjYWxsQmFjaylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICovXG4gICAgc2lnbkluV2l0aFR3aXR0ZXIoY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ2F1dGgvc2lnbkluVHdpdHRlcicsIGNhbGxCYWNrKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dGggc3RhdGUgY2hhbmdlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gRGlzdGluYXRpb24gcmVkaWNyZWN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdGF0ZShkaXN0aW5hdGlvbikge1xuICAgICAgICB0aGlzLmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGRpc3RpbmF0aW9uLnRoZW4odXNlcilcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGluYXRpb24uZm9yd2FyZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5wdXNoKGRpc3RpbmF0aW9uLmZvcndhcmQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLmdvKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXN0aW5hdGlvbi5jYXRjaCgpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RpbmF0aW9uLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnB1c2goZGlzdGluYXRpb24ucmVkaXJlY3QpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLmdvKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dGggY2hlY2sgc3RhdGUgY2hhbmdlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNhbGxCYWNrXG4gICAgICovXG4gICAgY2hlY2soY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsQmFjay50aGVuKHVzZXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrLmNhdGNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYXV0aCBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0QXV0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCB1c2VyLlxuICAgICAqL1xuICAgIHVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguY3VycmVudFVzZXJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgcHJvZmlsZSBwaWN0dXJlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaW1hZ2VcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9maWxlUGljdHVyZShpbWFnZSl7XG4gICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdhdXRoL3VwZGF0ZVByb2ZpbGVQaWN0dXJlJywgaW1hZ2UpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXV0aC9hdXRoLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("var Storage = function Storage(store) {\n    this.store = store\n};\n\n/**\n * retrieve storage object.\n */\nStorage.prototype.get = function get () {\n    return this.store.state.storage.storage\n};\n\n/**\n * upload a new file.\n *\n * @param {object} file\n */\nStorage.prototype.upload = function upload (file) {\n    this.store.commit('storage/uploadFile', file)\n};\n\n/**\n * download file.\n * \n * @param {object} reference\n */\nStorage.prototype.getDownloadURL = function getDownloadURL (file) {\n        var promis = this.get().ref().child(file.ref).getDownloadURL()\n        promis.then(function (url) {\n            file.result(url)\n        }).catch(function (error) {\n            file.error(error)\n        })\n    };\n    /**\n     * delete file.\n     *\n     * @param {object} file\n     */\nStorage.prototype.delete = function delete$1 (file) {\n    this.store.commit('storage/deleteFile', file)\n};\n\n/* harmony default export */ exports[\"a\"] = Storage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3RvcmFnZS9zdG9yYWdlLmpzPzVlMjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXRyaWV2ZSBzdG9yYWdlIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnN0YXRlLnN0b3JhZ2Uuc3RvcmFnZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHVwbG9hZCBhIG5ldyBmaWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbGVcbiAgICAgKi9cbiAgICB1cGxvYWQoZmlsZSkge1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnc3RvcmFnZS91cGxvYWRGaWxlJywgZmlsZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkb3dubG9hZCBmaWxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBnZXREb3dubG9hZFVSTChmaWxlKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzID0gdGhpcy5nZXQoKS5yZWYoKS5jaGlsZChmaWxlLnJlZikuZ2V0RG93bmxvYWRVUkwoKVxuICAgICAgICAgICAgcHJvbWlzLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgICAgICBmaWxlLnJlc3VsdCh1cmwpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgZmlsZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRlbGV0ZSBmaWxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsZVxuICAgICAgICAgKi9cbiAgICBkZWxldGUoZmlsZSkge1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnc3RvcmFnZS9kZWxldGVGaWxlJywgZmlsZSlcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdG9yYWdlL3N0b3JhZ2UuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_js__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_js__ = __webpack_require__(1);\n\n\n\n// late binding\nvar Vue\n\nvar mixin = {\n    created: function() {\n        //\n    }\n}\n\nvar Myfirebase = {\n\n    install: function install(Vue, options) {\n\n        var store = options.store;\n        var router = options.router;\n        Vue.mixin(mixin)\n        Vue.prototype.$auth = new __WEBPACK_IMPORTED_MODULE_0__auth_auth_js__[\"a\" /* default */](options.store, options.router)\n        Vue.prototype.$storage = new __WEBPACK_IMPORTED_MODULE_1__storage_storage_js__[\"a\" /* default */](options.store)\n    }\n}\n\n/* harmony default export */ exports[\"default\"] = Myfirebase;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoIGZyb20gJy4vYXV0aC9hdXRoLmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UuanMnXG5cbi8vIGxhdGUgYmluZGluZ1xubGV0IFZ1ZVxuXG5sZXQgbWl4aW4gPSB7XG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vXG4gICAgfVxufVxuXG5jb25zdCBNeWZpcmViYXNlID0ge1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblxuICAgICAgICBjb25zdCB7c3RvcmUscm91dGVyfSA9IG9wdGlvbnNcbiAgICAgICAgVnVlLm1peGluKG1peGluKVxuICAgICAgICBWdWUucHJvdG90eXBlLiRhdXRoID0gbmV3IEF1dGgob3B0aW9ucy5zdG9yZSwgb3B0aW9ucy5yb3V0ZXIpXG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuJHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShvcHRpb25zLnN0b3JlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlmaXJlYmFzZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);