export default class Database {
    /**
     * New Database instance
     * @param {object} Vuex
     */
  constructor (store) {
    this.database = store.state.database
  }

    /**
     * Get firebase database root ref.
     */
  get () {
    return this.database
  }
}
