
// Takes date object argument and returns a String format 'YYYY-MM-DD'
export const dateStringFromObject = object => {
  if (object === undefined) {
    console.log('undefined date sent');
    return undefined;
  }

  // Appends a 0 to single digitmonth and day values 
    // 2022/5/4 => 2022/05/04
  const saltedValues = datePrefixZero({ month: String(object.month), day: String(object.day) });
  return`${String(object.year)}-${saltedValues.month}-${saltedValues.day}`;
};

// Returns an object
// Prefixes a 0 onto a month value or day value that is a single digit.
// {year: 2022, month: 8, day: 9} is converted to {year: 2022, month: 08, day: 09}
const datePrefixZero = (object) => {
  if (object.month != null && object.day != null) {
    // Adds a '0' to the begining of a month or day that is only one digit
    // Changes 6 to 06. Leaves 10 as 10
    switch (object.month.length) {
      case 1: 
        object.month = `0${object.month}`;
        break;
      case 2:
        break;
    };
    switch (object.day.length) {
      case 1: 
        object.day = `0${object.day}`;
        break;
      case 2:
        break;
    };
    return object;
  } else {
    throw 'Error null value as argument :: zeroSalt.js ::';
  };
};

