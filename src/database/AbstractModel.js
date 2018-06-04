class AbstractModel {

    /**
     * Define subclass propertires.
     *
     * @return void
     */
  defineProperties () {
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
     * Ensure document key.
     *
     * @param {string} key
     */
  ensureKey (key) {
    if (key === undefined) {
      throw new Error('Key is undefined')
    }
  }

    /**
     * Validate properties.
     *
     * @var {*} props
     *
     * @return void
     */
  validate (props) {
    let keys = Object.getOwnPropertyNames(props)
    this.required().forEach((el) => {
      let result = keys.find((r) => {
        return el === r && this.props[r] !== ''
      })
      if (result === undefined) {
        throw new Error('Property is required')
      }
    })
  }
}

export default AbstractModel
