function logicalCalc(array, op) {
  if (op === "AND") {
    return array.every(Boolean);
  } else if (op === "OR") {
    return array.some(Boolean);
  } else if (op === "XOR") {
    return array.reduce((acc, curr) => acc !== curr);
  }
}