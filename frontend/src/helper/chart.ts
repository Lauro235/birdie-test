function createLabelArray(obj: {[index: string]: number}) {
  return Object.keys(obj)
}

function createDataArray(obj: {[index: string]: number}) {
  return Object.values(obj)
}

export {createLabelArray, createDataArray}