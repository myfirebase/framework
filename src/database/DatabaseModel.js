export default class DatabaseModel {
    
    /**
     * Create new DatabaseModel instance.
     * 
     * @param {*} ref 
     */
    constructor(ref) {
        this.ref = ref
    }

    /**
     * Define subclass propertires.
     * 
     * @return void
     */
    defineProperties() {
        let keys = Object.keys(this)
        let values = Object.values(this)
        keys.splice(0, 1)
        values.splice(0, 1)
        let props = {}
        for (let i = 0; i < keys.length; i++) {
            props[keys[i]] = values[i]
        }
        this.props = props
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
        this.validate()

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

    /**
     * Ensure document key.
     * 
     * @param {string} key 
     */
    ensureKey(key) {
        if (key === undefined) {
            throw new Error('Key is undefined')
        }
    }

    /**
     * Validate properties.
     * 
     * @return void
     */
    validate() {
        let keys = Object.getOwnPropertyNames(this.props)
        this.required().forEach((el) => {
            let result = keys.find((r) => {
                return el == r && this.props[r] != ""
            })
            if (result == undefined) {
                throw new Error("Property is required")
            }
        })
    }
}