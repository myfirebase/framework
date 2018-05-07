import Auth from './auth/auth.js'
import Storage from './storage/storage.js'
import Database from './database/database.js'
import Firestore from './firestore/firestore.js'
import DatabaseModel from './database/DatabaseModel.js'
import FirestoreModel from './database/FirestoreModel.js'

// late binding
let Vue

let mixin = {
  created: function () {
        //
  }
}

let auth

let storage

let database

let firestore

const Myfirebase = {

  install (Vue, options) {
        /**
         * Injetct store and router via Myfirebase options.
         */
    const { store, router, middlewares } = options

    Vue.mixin(mixin)

    var VueStore = options.store
    auth = new Auth(VueStore, options.router)
    storage = new Storage(VueStore)
    database = new Database(VueStore)
    firestore = new Firestore(VueStore)

        /**
         * Initialize Firebase Auth global instance.
         * Initialize Firebase Cloud Storage (FCS).
         * Initialize Firebase realtime Database.
         * @var $auth
         * @var $storage
         * @var $database
         */
    Vue.prototype.$auth = auth
    Vue.prototype.$storage = storage
    Vue.prototype.$database = database
    Vue.prototype.$firestore = firestore

    Vue.auth = auth
    Vue.database = database
    Vue.storage = storage
    Vue.firestore = firestore
    Vue.store = VueStore

        /**
         * Global Navigation Guards.
         */
    router.beforeEach((to, from, next) => {
      var myfirebase = { auth, storage, database, firestore }
      var actions = { to, from, next }

            // register global guards
      options.middlewares.forEach((call) => {
        call(myfirebase, actions)
      })
    })
  }
}

export { DatabaseModel }

export { FirestoreModel }

export default Myfirebase.install
