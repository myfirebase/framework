import Auth from './auth/auth.js'
import Storage from './storage/storage.js'

// late binding
let Vue

let mixin = {
    created: function() {
        //
    }
}

const Myfirebase = {

    install(Vue, options) {
        /**
         * Injetct store and router via Myfirebase options.
         */
        const { store, router } = options
        Vue.mixin(mixin)

        /**
         * Initialize Firebase Auth global instance.
         * Initialize Firebase Cloud Storag (FCS).
         * @var $auth
         * @var $storage
         */
        Vue.prototype.$auth = new Auth(options.store, options.router)
        Vue.prototype.$storage = new Storage(options.store)
    }
}

export default Myfirebase.install