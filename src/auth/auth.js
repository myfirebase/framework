export default class Auth {

    /**
     * @constructor
     * @param {object} store
     * @param {object} router
     */
    constructor(store, router) {
        this.store = store
            // Auth State
        this.auth = store.state.auth.auth
            //Vue Router
        this.router = router
    }

    /**
     * Login with email and password.
     *
     * @param {string} email
     * @param {string} password
     * @param {function} callBack
     */
    loginWithEmailAndPassowrd(user) {
        this.store.commit('auth/login', {
            email: user.email,
            password: user.password,
            result: user.result,
            error: user.error
        })
    }

    /**
     * SignOut.
     *
     */
    logout() {
        this.store.commit('auth/logout')
    }

    /**
     * Register with Email and password.
     *
     * @param {string} email
     * @param {string} password
     */
    registerWithEmailAndPassword(user) {
        this.store.commit('auth/register', {
            email: user.email,
            password: user.password,
            result: user.result,
            error: user.error
        })
    }

    /**
     * Register using google account.
     *
     * @param {function} callBack
     *
     */
    signInWithGoogle(callBack) {
        this.store.commit('auth/signInGoogle', callBack);
    }

    /**
     * Register using facebook account.
     *
     * @param {function} callBack
     *
     */
    signInWithFacebook() {
        this.store.commit('auth/signInFacebook', this.auth)
    }

    /**
     *
     *
     */
    signInWithGithub() {
        //TODO: use Firebase github Auth provider
    }

    /**
     *
     *
     */
    signInWithTwitter() {
        //TODO: use Firebase Twitter Auth provider
    }

    /**
     * Auth state changed.
     * 
     * @param {Object} Distination redicrection
     * @param {Function} callback
     */
    state(distination) {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                distination.then(user)
                this.router.push(distination.forward)
                this.router.go(1)
            } else {
                this.router.push(distination.redirect)
                this.router.go(1)
            }
        })
    }

    /**
     * Get auth object.
     */
    getAuth() {
        return this.auth
    }

    /**
     * Get the current user.
     */
    user() {
        return this.auth.currentUser
    }

    updateProfile(profile) {
        this.store.commit('auth/updateProfile', profile);
    }
}