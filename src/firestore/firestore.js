export default class Firestore {
    /**
     * @constructor
     * @param {Vuex} Vuex
     */
    constructor(Vuex) {
        this.firestore = Vuex
    }

    /**
     * Get firestore
     */
    get() {
        return this.firestore
    }
}