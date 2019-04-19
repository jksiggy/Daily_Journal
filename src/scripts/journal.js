



/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/


// let InputData = []

// const objectsJournalEntry = {
//     DateOfEntry: "",
//     ConceptsCovered:"",
//     JournalEntry:"",
//     MoodForTheDay:"",


// };


// InputData.push(objectsJournalEntry);
// console.log(InputData);


//const objectsJournalEntry2 = {
  //  DateOfEntry: "",
   // ConceptsCovered:"",
   // JournalEntry:"",
   // MoodForTheDay:"",


//};

//InputData.push(objectsJournalEntry2);
//console.log(InputData);


//onst objectsJournalEntry3 = {
   // DateOfEntry: "",
   // ConceptsCovered:"",
    //JournalEntry:"",
    //MoodForTheDay:"",


//};



//InputData.push(objectsJournalEntry3);
//console.log(InputData);

//Journal Exercise 3//

const eLog = document.querySelector(".entryLog");
const submit = document.querySelector('.stored');
submit.addEventListener("click", function(){


    const date = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const entries = document.querySelector(".log").value
    const mood = document.querySelector(".mood").value
    
    eLog.innerHTML = `
    <div class= "daily">
    <h1>${date} </h1>
    <p>${concepts}</p>
    <p>${entries}</p>
    <p>${mood}</p>
    
    </div>
    `
    event.preventDefault();


})
   


//Journal Exercise 3//