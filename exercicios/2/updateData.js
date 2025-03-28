function updateData(currentObject, newDataObject) {
  for (let key in newDataObject) {
    if (currentObject.hasOwnProperty(key)) {
      currentObject[key] = newDataObject[key];
    }
  }

  return currentObject;
}

module.exports = updateData;
