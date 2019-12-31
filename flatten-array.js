//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (array) => {
  let flattened = array.reduce((flat, value) => {
    if (Array.isArray(value)) {
      flat.push(...flatten(value));
    } else {
      flat.push(value)
    }
    return flat
  }, []);
  return flattened.filter(val => val !== null && val !== undefined)
}
