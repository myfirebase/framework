import Auth from './auth.js'
import Storage from './storage.js'

// late binding
let Vue

let mixin = {
    created: function() {
        //
    }
}

const Myfirebase = {

    install(Vue, options) {

        const {store,router} = options
        Vue.mixin(mixin)
        Vue.prototype.$auth = new Auth(options.store, options.router)
        Vue.prototype.$storage = new Storage(options.store)
    }
}

export default Myfirebase