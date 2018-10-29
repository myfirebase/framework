export default class Database {
    /**
     * New Database instance
     * @param {object} store
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
