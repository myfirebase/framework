import Auth from './auth/auth.js'
import Storage from './storage/storage.js'

// late binding
let Vue

let mixin = {
    created: function() {
        console.log("Myfirebase Ready")
    }
}

const Myfirebase = {

    install(Vue, options) {

    	const {store,router} = options

        Vue.mixin(mixin)
        console.log("Setup Auth and Storage")
        Vue.prototype.$auth = new Auth(options.store, options.router)
        Vue.prototype.$storage = new Storage(options.store)
    }
}

export default Myfirebase