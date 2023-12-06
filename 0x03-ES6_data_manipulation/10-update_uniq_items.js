const updateUniqueItems = (map) => {
    map.forEach((value) => {
        if (value === 1) {
            return map.set(value, 100)
        }
    })
}

export default updateUniqueItems