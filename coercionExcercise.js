// TODO: write the validation functions
function isValidName(name) {
  return typeof name === "string" && name.length >= 3 && Number(name) !== 0;
}

function hoursAttended(attended, length) {
  // either parameter may only be a string or number
  const isStringOrNumber = [attended, length].every(
    (value) =>
      (typeof value === "string" && value.trim() !== "") ||
      typeof value === "number"
  );

  // either parameter may only be a string or number
  attended = Number(attended);
  length = Number(length);

  // both numbers must be 0 or higher
  const isZeroOrHigher = [attended, length].every((value) => value >= 0);

  // both numbers must be whole numbers
  const isWholeNumber = [attended, length].every((value) =>
    Number.isInteger(value)
  );

  // `attended` must be less than or equal to `length`
  const isAttendedEqualLessThanLength = attended <= length;

  return (
    isStringOrNumber &&
    isZeroOrHigher &&
    isWholeNumber &&
    isAttendedEqualLessThanLength
  );
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
