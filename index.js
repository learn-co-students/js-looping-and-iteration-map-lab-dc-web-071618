// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (i) {
    return i.toLowerCase();
  });
}

function nameToAttributes(arr) {
  return arr.map(function (i) {
    const fullName = i.split(' ');
    return Object.assign({}, {firstName: fullName[0], lastName: fullName[1]});
  });
}

function attributesToPhrase(arr) {
  return arr.map(function (i) {
    return `${i.name} is from ${i.hometown}`;
  });
}
