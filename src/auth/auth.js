export default class Auth {

    /**
     * @constructor
     * @param {object} store
     * @param {object} router
     */
    constructor(store, router) {
        // store
        this.store = store
        // Auth State
        this.auth = store.state.auth.auth
        //Vue Router
        this.router = router
    }

    /**
     * Login with email and password.
     *
     * @param {object} user
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
     * @param {object} user
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
    signInWithFacebook(callBack) {
        this.store.commit('auth/signInFacebook', callBack)
    }

    /**
     *
     *
     */
    signInWithGithub(callBack) {
        this.store.commit('auth/signInGithub', callBack)
    }

    /**
     *
     *
     */
    signInWithTwitter(callBack) {
        this.store.commit('auth/signInTwitter', callBack)
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
                if (distination.forward) {
                    this.router.push(distination.forward)
                    this.router.go(1)
                }
            } else {
                distination.catch()
                if (distination.redirect) {
                    this.router.push(distination.redirect)
                    this.router.go(1)
                }
            }
        })
    }

    /**
     * Auth check state changed
     *
     * @param {object} callBack
     */
    check(callBack) {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                callBack.then(user)
            } else {
                callBack.catch()
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

    /**
     * Update profile picture
     *
     * @param {object} image
     */
    updateProfilePicture(image){
        this.store.commit('auth/updateProfilePicture', image)
    }
}