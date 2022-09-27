
// Returns an ARRAY of Objects
// Each element in the array is an OBJECT {year: num, month: num, day: num} 
// Each object is a date. Elements in the array span from a specified date (default 1995-06-16) - todays date
const getAllDates = (date = {year: 1995, month: 6, day: 16, string: '1995-06-16'}) => {
  let today = new Date(Date());
  let year = date.year;
  let month = date.month;
  let day = date.day;
  let allDates = [date];  // Array that will be returned. Initialized with the start date
  const monthsInYear = 12;
  let daysInMonth;
  // Checks the day. If it is not a match to tody's date the iteration is unshifted to the allDates array
  while (year != today.getFullYear() || month != (today.getMonth() + 1) || day != today.getDate()){
    // Set days in a month
    switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysInMonth = 31;
        break;
      case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
      case 2: // If Februrary check if it is a leap year
        if (isLeapYear(year)) {
          daysInMonth = 29;
        } else daysInMonth = 28;
        break;
    };
    // Iterates to the next day
    if (day < daysInMonth) {
      ++day;
    } else {  // Day is the last day of the month
        day = 1;
        if (month < monthsInYear) {
          ++month
        } else {  // Month is last month in the year
            month = 1;
            ++year;
        }
    };
    
    // Adds this next date to the array
    let newDate = {year: year, month: month, day: day, string: `${year}-${appendZero(month)}-${appendZero(day)}`};
    allDates.unshift(newDate);
  };

  return allDates;
};


// Export getAllDates function
export default getAllDates;


// Check if a year is a leap year. Returns true if it is a leap year
const isLeapYear = year => {
  if (year % 4 == 0 && year % 400 == 0) {
    return true;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
};

// Appends a zero to a number if that number's length is 1
// Returns a string. Designed to take a umber as an argument
const appendZero = (number = Number) => {  
  switch (`${number}`.length) {
    case 1: 
      return `0${number}`;
    case 2:
      return `${number}`;
  }
}