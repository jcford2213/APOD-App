// Formats a date string
// from yyyy-mm-dd to mm-dd-yyyy
// and from mm-dd-yyyy to yyyy-mm-dd

const months = [
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

// Convert mmm-dd-yyyy to yyyy-mm-dd
export const toApiFormat = date => {
  let yearString = date.split('-')[2] // Selects 'yyyy' from 'mm-dd-yyy'
  let remainderString = `${date.split('-')[0]}-${date.split('-')[1]}` // selects 'mm' and determines the month name
  return `${yearString}-${remainderString}` // return 'yyyy-mm-dd'
}

// Convert yyyy-mm-dd to mm-dd-yyyy
export const toDisplayFormat = date => {
  let yearString = date.split('-')[0] // Selects 'yyyy' from 'yyyy-mm-dd'
  let monthName = months[parseInt(date.split('-')[1]) -1] // selects 'mm' and determines the month name
  let dayString = date.split('-')[2]  // selects 'dd' from 'yyyy-mm-dd'
  return `${monthName} ${dayString}, ${yearString}` // return 'Month dd, yyy'
}

