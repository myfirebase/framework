export default class Auth {
  /**
   * @constructor
   * @param {object} store
   * @param {object} router
   */
  constructor (store, router) {
    // store
    this.store = store

    // Auth State
    this.auth = store.state.auth.auth

    // Vue Router
    this.router = router
  }

  /**
   * Login with email and password.
   *
   * @param {object} user
   */
  loginWithEmailAndPassowrd (user) {
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
  logout () {
    this.store.commit('auth/logout')
  }

  /**
   * Register with Email and password.
   *
   * @param {object} user
   */
  registerWithEmailAndPassword (user) {
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
  signInWithGoogle (callBack) {
    this.store.commit('auth/signInGoogle', callBack)
  }

  /**
   * Register using facebook account.
   *
   * @param {function} callBack
   *
   */
  signInWithFacebook (callBack) {
    this.store.commit('auth/signInFacebook', callBack)
  }

  /**
   *
   *
   */
  signInWithGithub (callBack) {
    this.store.commit('auth/signInGithub', callBack)
  }

  /**
   *
   *
   */
  signInWithTwitter (callBack) {
    this.store.commit('auth/signInTwitter', callBack)
  }

  /**
   * Auth state changed.
   *
   * @param {string} next
   * @param {string} redirect
   *
   * @return Promise
   */
  state (next, redirect) {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          if (next) {
            this.router.push(next)
            this.router.go(1)
          }
          resolve(user)
        } else {
          if (redirect) {
            this.router.push(redirect)
            this.router.go(1)
          }
          reject('Error')
        }
      })
    })
  }

  /**
   * Auth check state changed
   *
   * @return Promise
   */
  check () {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user)
        } else {
          reject('Error')
        }
      })
    })
  }

  /**
   * Get auth object.
   */
  getAuth () {
    return this.auth
  }

  /**
   * Get the current user.
   *
   * @return {*} user
   */
  user () {
    if (this.auth.currentUser) {
      return this.auth.currentUser
    }
    let user
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        user = authUser
      } else {
        user = null
      }
    })
    return user
  }

  /**
   * Update profile picture
   *
   * @param {object} image
   */
  updateProfilePicture (image) {
    this.store.commit('auth/updateProfilePicture', image)
  }
}
