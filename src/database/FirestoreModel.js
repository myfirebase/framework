import AbstractModel from './AbstractModel'

class FirestoreModel extends AbstractModel {

    /**
     * Create new DatabaseModel instance.
     *
     * @constructor
     *
     * @param {*} ref
     */
  constructor (ref) {
    super()
    this.ref = ref
  }

    /**
     * Initialize.
     *
     * @return FirestoreModel
     */
  init () {
    this.defineProperties()
    return this
  }

    /**
     * Add new document to a collection.
     *
     * @return Promise
     */
  add () {
    this.defineProperties()
    this.validate(this.props)
    delete this.props['props']
    return this.ref.add(this.props)
  }

    /**
     * Remove a document.
     *
     * @param {string} key
     *
     * @return Promise
     */
  delete (key) {
    this.ensureKey(key)

    return this.ref.doc(key).delete()
  }

    /**
     * Update a document in a collection.
     *
     * @param {string} key
     *
     * @return Promise
     */
  update (key) {
    this.ensureKey(key)
    this.defineProperties()
    delete this.props['props']
    return this.ref.doc(key).update(this.props)
  }
}

export default FirestoreModel
