// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(e){
        return e.toLowerCase();
    })
}

function nameToAttributes(names) {
    return names.map(function(e){
        return Object.assign({}, {'firstName': e.split(' ')[0], 'lastName': e.split(' ')[1]})
    })
}

function attributesToPhrase(attributes){
    return attributes.map(function(e){
        return `${e.name} is from ${e.hometown}`
    })
}