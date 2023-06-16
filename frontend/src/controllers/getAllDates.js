// Returns an array of date objects {year: num, month: num, day: num} 
// default date object is 06-16-1995

// Check if a year is a leap year. Returns true if year is a leap year
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

const getAllDates = () => {
  let today = new Date(Date()); // today's date
  let newDate = {
     month: 6,
     day: 16,
     year: 1995
  }
  let allDates = [{month: newDate.month, day: newDate.day, year: newDate.year, string: `${appendZero(newDate.month)}-${appendZero(newDate.day)}-${newDate.year}`}];  // Array of date objects. Will be returned by parent. Initialized with the default date parameter or a date argument
  const monthsInYear = 12;
  let daysInMonth;  // Will hold correct amount of days depending on current month

  // Iterates until newDate equals today's date
  while (newDate.year != today.getFullYear() || newDate.month != (today.getMonth() + 1) || newDate.day != today.getDate()){
    // Set correct amount of days in a month
    switch (newDate.month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysInMonth = 31;
        break;
      case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
      // If the month is Februrary
      // check if year is a leap year
      case 2: 
        if (isLeapYear(newDate.year)) {
          daysInMonth = 29;
        } else daysInMonth = 28;
        break;
    };
    // Iterates to the next day
    if (newDate.day < daysInMonth) {
      ++newDate.day;
    } else {  // Day is the last newDate.day of the month
        newDate.day = 1;
        if (newDate.month < monthsInYear) {
          ++newDate.month
        } else {  // Month is last newDate.month in the year
            newDate.month = 1;
            ++newDate.year;
        }
    };
    
    // Add object { newDate object and a stringified version of new date } to beginning of allDates array
    allDates.unshift({ month: newDate.month, day: newDate.day, year: newDate.year, string: `${appendZero(newDate.month)}-${appendZero(newDate.day)}-${newDate.year}`});  
  };
  console.log(allDates[200].string);

  return allDates;
};


// Export getAllDates function
export default getAllDates;
