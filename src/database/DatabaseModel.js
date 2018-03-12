import AbstractModel from "./AbstractModel"

class DatabaseModel extends AbstractModel {

    /**
     * Create new DatabaseModel instance.
     * 
     * @constructor
     * 
     * @param {*} ref 
     */
    constructor(ref) {
        super()
        this.ref = ref
    }

    /**
     * Initialize.
     * 
     * @return DatabaseModel
     */
    init() {
        this.defineProperties()
        return this
    }

    /**
     * Add a document to the firebase database.
     * 
     * @return Promise
     */
    push() {
        this.defineProperties()
        this.validate(this.props)

        return this.ref.push(this.props)
    }

    /**
     * Update a document in the firebase database.
     * 
     * @param {string} key
     * 
     * @return Promise 
     */
    update(key) {
        this.ensureKey(key)
        this.defineProperties()

        return this.ref.child(key).update(this.props)
    }

    /**
     * Remove a document in the firebase database.
     * 
     * @param {string} key 
     * 
     * @return Promise
     */
    remove(key) {
        this.ensureKey(key)

        return this.ref.child(key).remove()
    }
}

export default DatabaseModel
