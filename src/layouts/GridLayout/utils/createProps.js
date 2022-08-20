function createProps(props,option){

    const _props = {}

    Object.keys(props).filter(key => key !== 'children' || option[key]).forEach(key => _props[key] = props[key])

    return _props
}

export {createProps}