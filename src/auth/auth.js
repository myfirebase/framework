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
   * @param {string} email
   * @param {string} password
   *
   * @return Promise
   */
  loginWithEmailAndPassword (email, password) {
    return this.store.dispatch('auth/login', {
      email: email,
      password: password
    })
  }

  /**
   * SignOut.
   * @todo logout should return a Promise.
   */
  logout () {
    this.store.dispatch('auth/logout')
  }

  /**
   * Register with an Email and password.
   *
   * @param {object} user
   */
  registerWithEmailAndPassword (email, password) {
    return this.store.dispatch('auth/register', {
      email: email,
      password: password
    })
  }

  /**
   * SignIn using google account.
   *
   * @return Promise
   */
  signInWithGoogle () {
    return this.store.dispatch('auth/signInGoogle')
  }

  /**
   * SignIn using facebook account.
   *
   * @return Promise
   *
   */
  signInWithFacebook () {
    return this.store.dispatch('auth/signInFacebook')
  }

  /**
   * SignIn using github account.
   *
   * @return Promise
   */
  signInWithGithub () {
    return this.store.dispatch('auth/signInGithub')
  }

  /**
   * SignIn using Twitter account.
   *
   * @return Promise
   */
  signInWithTwitter () {
    return this.store.dispatch('auth/signInTwitter')
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
          resolve(user)
          if (typeof next === 'string') {
            this.router.push(next)
            this.router.go(1)
          }
        } else {
          resolve(null)
          if (typeof redirect === 'string') {
            this.router.push(redirect)
            this.router.go(1)
          }
        }
      })
    })
  }

  /**
   * Check if the auth stat has been changed.
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
   * @return {*} user|null
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
    return this.store.dispatch('auth/updateProfilePicture', image)
  }
}
