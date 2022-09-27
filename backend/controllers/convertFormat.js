// DateIdFormat is a static class which reformats Image Dates from date-format to database id-format 

const ConvertFormat = class {

  // Converts date-formatted YYYY-MM-DD string to id-formatted YYYYMMDD string 
  static toIdFormat = date => {
    if (date != null) {
      while (date.includes('-')) {
        date = date.replace('-', '');
      };
      date = Number(date);
      return date;
    } else {
      throw 'Error null value as argument :: convertFormat.js ::'
    }
  }

  // Converts id-formatted YYYYMMDD string to date-formatted YYYY-MM-DD string 
  static toDateFormat = id => {
    // Change YYYYMMDD to YYYY-MM-DD
  }
};

export default ConvertFormat;