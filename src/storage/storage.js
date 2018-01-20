export default class Storage {

    /**
     * @constructor
     * @param {object} store
     */
    constructor(store) {
        this.store = store
    }

    /**
     * retrieve storage object.
     */
    get() {
        return this.store.state.storage.storage
    }

    /**
     * upload a file.
     *
     * @param {object} file
     */
    upload(file) {
        this.store.commit('storage/uploadFile', file)
    }

    /**
     * download a file.
     * 
     * @param {object} reference
     */
    getDownloadURL(file) {
        let promis = this.get().ref().child(file.ref).getDownloadURL()
        promis.then(url => {
            file.result(url)
        }).catch(error => {
            file.error(error)
        })
    }

    /**
     * delete file.
     *
     * @param {object} file
     */
    delete(file) {
        this.store.commit('storage/deleteFile', file)
    }

    /**
     * upload multiple files.
     * 
     * @param {object} files
     * @todo upload nultiple files through store.
     */
    uploadMultiple(files) {
        this.store.commit('storage/uploadFiles', files)
    }
}