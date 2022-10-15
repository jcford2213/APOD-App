const validateSearch = input => {
  const checkExpression = /\d\d\d\d\-\d\d\-\d\d/;  // YYYY-MM-DD
  if (input.match(checkExpression)) {
    return true;
  } else {
    return false;
  }
}

export default validateSearch;