fetchData = (word) => {
  const DICT_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  return fetch(DICT_URL)
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
}

searchWord = () => {
  const word = document.getElementById('word').value.trim();
  if (word === '') {
      alert('Please enter a word to search.');
      return;
  }

  fetchData(word)
      .then((response) => {
          displayDictionaryData(response);
      })
      .catch((error) => {
          console.log(error);
          alert('An error occurred while fetching data. Please try again later.');
      });
}

  displayDictionaryData = (data) => {
    
    const wordElement = document.getElementById('showWord');
    const meaningElement = document.getElementById('meaning');
    const speechElement = document.getElementById('speech');
    const phoneticElement = document.getElementById('displayPhoenetic');
    const audioElement = document.getElementById('audio');
  
    // Display word, meaning, and part of speech
    wordElement.innerText = data[0].word;
    meaningElement.innerText = data[0].meanings[0].definitions[0].definition;
    speechElement.innerText = data[0].meanings[0].partOfSpeech;
  
    // Display phonetic transcription
    phoneticElement.innerText = data[0].phonetic;

  
    // Clear search input
    document.getElementById('word').value = '';
  }
  


