const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1)) {
      if (!Array.isArray(val2)) {
        return false;
      } else if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject));

const sportsEquipment = { balls: "soccer", helmets: "football"};
const equipment2 = {helmets: ["football", "baseball"], balls: ["soccer", "basketball"]};
console.log(eqObjects(sportsEquipment , equipment2));
const equipment3 = {balls: "soccer", raquets: "tennis", helmets: "football"};
console.log(eqObjects(sportsEquipment, equipment3));


