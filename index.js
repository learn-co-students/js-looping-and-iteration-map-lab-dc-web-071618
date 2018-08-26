// Code your solution in this file.
function lowerCaseDrivers(drivers) {
   return drivers.map( function (driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map( function (driver) {
    const names = driver.split(' ')
    const first = names[0];
    const last = names[1];
    return { firstName: first, lastName: last };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map( function (drvr) {
    return `${drvr.name} is from ${drvr.hometown}`
  })

}
