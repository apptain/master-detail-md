export const dtoMongoDefinition = function(fields) {
  //TODO Add Type Check
  var dtoMongoDefinition = []
  fields.forEach(function(field) {
    dtoMongoDefinition.push({field: 1})
  })
}

export const capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
