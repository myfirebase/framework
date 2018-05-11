export default class Storage {

    /**
     * @constructor
     * @param {object} store
     */
  constructor (store) {
    this.store = store
  }

    /**
     * retrieve storage object.
     */
  get () {
    return this.store.state.storage.storage
  }

    /**
     * Upload a file.
     *
     * @param {object} file
     */
  upload (file) {
    this.store.commit('storage/uploadFile', file)
  }

    /**
     * Download a file.
     *
     * @param {string} file
     */
  getDownloadURL (ref) {
    return this.get().ref().child(ref).getDownloadURL()
  }

    /**
     * Delete file.
     *
     * @param {string} file
     */
  delete (file) {
    return this.store.dispatch('storage/deleteFile', file)
  }

    /**
     * Upload multiple files.
     *
     * @param {object} files
     */
  uploadMultiple (files) {
    this.store.commit('storage/uploadFiles', files)
  }
}
