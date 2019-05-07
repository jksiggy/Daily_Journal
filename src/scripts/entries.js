const API = "http://localhost:3000/objectsJournalEntry";
const collectingEntry = () => {
  fetch(API).then(result => result.json())
  .then(parsedResult => {
      console.log(parsedResult)
  })
}

collectingEntry ();