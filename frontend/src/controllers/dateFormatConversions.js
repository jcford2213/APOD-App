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
  let yearString = date.split('-')[2]
  let remainderString = `${date.split('-')[0]}-${date.split('-')[1]}`
  return `${yearString}-${remainderString}`
}

// Convert yyyy-mm-dd to mm-dd-yyyy
export const toDisplayFormat = date => {
  let yearString = date.split('-')[0]
  let monthName = months[parseInt(date.split('-')[1]) -1]
  let dayString = date.split('-')[2]
  return `${monthName} ${dayString}, ${yearString}`
}

