// const items = ['item1','item2']
// module.exports = items

//-> in above we are an exporting an array called items

module.exports.items = ['item1','item2']
//-> here we are exporting an array in a property named items

const persons = {
    name: 'tom'
}

module.exports.newperson = persons
