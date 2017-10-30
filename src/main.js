import Auth from './auth/auth.js'
import Storage from './storage/storage.js'
import Database from './database/database.js'

// late binding
let Vue

let mixin = {
    created: function() {
        //
    }
}

let auth

let storage

let database

const Myfirebase = {

    install(Vue, options) {

        /**
         * Injetct store and router via Myfirebase options.
         */
        const { store, router, middlewares } = options

        Vue.mixin(mixin)

        var VueStore = options.store
        auth = new Auth(VueStore, options.router)
        storage = new Storage(VueStore)
        database = new Database(VueStore)

        /**
         * Initialize Firebase Auth global instance.
         * Initialize Firebase Cloud Storag (FCS).
         * @var $auth
         * @var $storage
         */
        Vue.prototype.$auth = auth
        Vue.prototype.$storage = storage
        Vue.prototype.$database = database
        Vue.auth = auth
        Vue.database = database
        Vue.store = VueStore

        /**
         * Global Guards middleware.
         */
        router.beforeEach((to, from, next) => {
            var myfirebase = { auth, storage, VueStore }
            var actions = { to, from, next }

            // register global middlewares
            options.middlewares.forEach((call) => {
                call(myfirebase, actions)
            })
        })
    }
}

export default Myfirebase.install