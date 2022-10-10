const getSearchImage = async input => {
  const checkExpression = /\d\d\d\d\-\d\d\-\d\d/;  // YYYY-MM-DD
  if (input != undefined && input.match(checkExpression)) {
    console.log(`Date: ${input} - Searching for image...`)
    this.$el.querySelector('#userInput').setCustomValidity('');
    const response = await axios.post(`http://localhost:${import.meta.env.VITESERVER_PORT}`, {  // Send post to server
      date: input
    });
    console.log(response.data);
    switch (response.data.hdurl) {
      case undefined:
        this.imageURL = response.data.imageURL;
        break;
      default:
        this.imageURL = response.data.hdurl;
        break;
    }
    this.podDescription = response.data.explanation;
    this.searchDate = response.data.date;
    this.podTitle = response.data.title;
  } else {
    console.log(`Search Error: Invalid User input: "${this.userInput}"`);
    this.$el.querySelector('#userInput').setCustomValidity('Invalid Field');
    this.clearInput();
  }
}

export default getSearchImage;