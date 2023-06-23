const createHashTable = (size = 10) => {
  return new Array(size)
}

const hash = (keyMap, key) => {
  let total = 0
  const WEIRD_PRIME = 31
  key = key.toLowerCase()

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i]
    const value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % keyMap.length
  }

  return total
}

const set = (keyMap, key, value) => {
  const index = hash(keyMap, key)

  if (!keyMap[index]) {
    keyMap[index] = []
  }

  keyMap[index].push([key, value])
  
  return keyMap
}

const get = (keyMap, key) => {
  const index = hash(keyMap, key)

  if (keyMap[index]) {
    for (let i = 0; i < keyMap[index].length; i++) {
      if (keyMap[index][i][0] === key) {
        return keyMap[index][i]
      }
    }
  }

  return undefined
}

const keys = (keyMap) => {
  const keysArr = []

  for (let i = 0; i < keyMap.length; i++) {
    if (keyMap[i]) {
      for (let j = 0; j < keyMap[i].length; j++) {
        if (!keysArr.includes(keyMap[i][j][0])) {
          keysArr.push(keyMap[i][j][0])
        }
      }
    }
  }

  return keysArr
}

const values = (keyMap) => {
  const valuesArr = []

  for (let i = 0; i < keyMap.length; i++) {
    if (keyMap[i]) {
      for (let j = 0; j < keyMap[i].length; j++) {
        if (!valuesArr.includes(keyMap[i][j][1])) {
          valuesArr.push(keyMap[i][j][1])
        }
      }
    }
  }
  
  return valuesArr
}

let hashTable = createHashTable()

hashTable = set(hashTable, 'hello', 'goodbye')
hashTable = set(hashTable, 'rabbit', 'carrot')
hashTable = set(hashTable, 'red', 'apple')
hashTable = set(hashTable, 'cats', 'cute')
hashTable = set(hashTable, 'cats', 'cute')