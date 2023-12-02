// Import the Firebase javascript sdk
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        import{getDatabase , ref, push,onValue,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

          const appSetting={
            databaseURL:"https://playground-d3930-default-rtdb.europe-west1.firebasedatabase.app/"

          }
        const app= initializeApp(appSetting)
        const database= getDatabase(app)
        const shoppingListInDB = ref(database,"shoppingList")

//connencting javascript with the html commponents 
        const inputFieldEl = document.getElementById("input-field")
        const addButtonEl = document.getElementById("add-button")
        const shoppingListEl= document.getElementById("shopping-list")

/// Listen for a click event on the "Add to Basket" button
// Add the same item to the Firebase Realtime Database

addButtonEl.addEventListener("click", function () {  
  let inputValue = inputFieldEl.value.trim(); // Get the value from the input field and remove leading/trailing spaces

  if (inputValue) {
    // Only proceed if inputValue is not empty

    // Add the same item to the Firebase Realtime Database
    push(shoppingListInDB, inputValue)
      .then(() => {
        console.log(`${inputValue} added to the database`);
      })
      .catch((error) => {
        console.error("Error adding data to the database:", error);
      });
    
    // Clear the input field function is called 
    clearInputFieldEl();
  } else {
    // Display an alert if inputValue is empty
    alert("You should write something before adding.😊");
  }
});


onValue(shoppingListInDB, function (snapshots) {

//check if the snapshot is null from the database
      if (snapshots.exists()) {
        let itemsArray = Object.entries(snapshots.val());

 // Deleting before running the for loop, the function is called
    clearShoppingListEl();

    for (let i = 0; i < itemsArray.length; i++) {
// Console log each item using a for loop
      let currentItem = itemsArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      appendItemToshoppingListEl(currentItem);
    }
  }else{
    shoppingListEl.innerHTML="You can now add the items its empty"
  }
});


//create function to clear shopping list in html 
          function clearShoppingListEl(){
              shoppingListEl.innerHTML=""
          }

// create function for clearing an input field after being uploaded(setting value to an empty string)
          function clearInputFieldEl(){
            inputFieldEl.value="";
          }

// create function for the shopping list 

  function  appendItemToshoppingListEl(item){

//shoppingListEl.innerHTML += `<li>${itemValue}</li>`; this can work if we want to use it to delete items 
        let itemID= item[0]
        let itemValue=item[1]

        let newEl = document.createElement("li")

        newEl.textContent= itemValue

// This is where we need to delete an item from the database when double clicked add an event listener

        newEl.addEventListener("click",function(){
        
          let exactLocationOfItemInDB=ref(database,`shoppingList/${itemID}`)
//Deleting the value from the Database
          remove(exactLocationOfItemInDB)
              .then(() => {
                console.log(`${itemValue} deleted successfully.`);
              })
              .catch((error) => {
                console.error(`Error deleting ${itemValue}:`, error);
              });
  })


        shoppingListEl.append(newEl)


}