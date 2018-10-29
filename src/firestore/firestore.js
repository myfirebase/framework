export default class Firestore {
    /**
     * @constructor
     * @param {object} store
     */
  constructor (store) {
    this.firestore = store.state.firestore
  }

    /**
     * Get firestore
     */
  get () {
    return this.firestore
  }
}
