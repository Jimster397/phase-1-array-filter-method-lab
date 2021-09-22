// Code your solution here
function findMatching(array, name) {
    return array.filter((drivers)=> {
        return drivers.toUpperCase() === name.toUpperCase()
    }) 
    }
function fuzzyMatch (array, name) {
    return array.filter((drivers)=> {
        return drivers[0] === name[0]
    })
}
function matchName(array, name) {
    return array.filter((drivers)=> {
        return drivers.name === name
    }) 
    }