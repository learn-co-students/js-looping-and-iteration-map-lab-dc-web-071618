// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driverName) { return driverName.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driverName) {
    return {firstName: driverName.split(' ')[0], lastName: driverName.split(' ')[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driverName) {
    return `${driverName.name} is from ${driverName.hometown}`;
  });  
}
