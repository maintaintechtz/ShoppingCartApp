-----------------------------VALUABLE LESSONS FOR THE PROJECT-----------------------------
// create or initiate variables that will be used in the function
// create a function for the action you just created 

//What to ask yourself is the varaible needed to be created in let,var,  or const?
NOTE in order for a function to work there must be varibles and function name with the the condition
// In the function below remember you need module to be able to import and export function both put in an html file document 
// like< script src="index.js" type="module"></script> the same with the other fuction.js 

//Here you need to import function from the firebase platform  using import{functionname} from filename

// Import the Firebase javascript sdk
            import {initiate} from ""
            import{getDataabase,ref,push } from""

//create objects 
            const app= initializeApp(appSetting)
            const database= getDatabase(app)
            const shoppingListInDB = ref(database,"shoppingList")

// connect js and html document
            const inputFieldEl = document.getElementById("input-field")
            const addButtonEl = document.getElementById("add-button")
            const shoppingListEl= document.getElementById("shopping-list")

//Add event listener to the button when clicked 
            addButtonEl.addEventListener("click", function () {
            let inputValue = inputFieldEl.value; 

//push value from input field to the database
            push(shoppingListInDB, inputValue)
                .then(() => {
                console.log(`${inputValue} added to the database`);
                })
                .catch((error) => {
                console.error("Error adding data to the database:", error);
                });

//call fuction for appending the item in using ui

                function functioname ()// pass the inputValue here because its not defined in the below functions 

//call function for clearing tht item in the inputFieldEl after being pushed 

                function functionname()

//write functiion for appendItemInshoppingListEl

                function appendItemInshoppingListEL (itemValue){
                    shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
//write function for clearing inputFieldEl
                functiion clearInputFieldEl(){
                    inputFieldEl.value="";
        }

/*----------------------------------------------OBJECT AND ARRAYS-----------------------------------------------------------
learn how to take a javascript object and transform it into and array 
  EXAMPLE OF THE FOLLOWING BELOW  is a javascript object 
  let OpricaUsers ={
    "01":"ally@oprica.com",
    "02":"salehe@oprica.com",
    "03":"diah@oprica.com"
  }
NOTE:
"01"---- are called keys 
"ally@oprica.com" -----are called value 
"01":"ally@oprica.com"-----both are called entries
   therefore it depends on what information you  need from the javascript object  if its keys,value  or both (entries)

REASON:
we learn to convert object into arrays so that we be able to retrieve data from the database 

---------------------------------------------BELOW ARE THE CODES (object and array conversation) ------------------------------------------------------------
 let 0pricaUsers ={
    "01":"ally@oprica.com",
    "02":"salehe@oprica.com",
    "03":"diah@oprica.com"

    Lets convert this into arrays 
                  1:getting emailIDS
                  let opricaEmailIDS=opricaUsers;
    the code is console.log(object.value(opricaUsers)) result ["ally@oprica.com","salehe@oprica.com","diah@oprica.com"]
                  2:getting Ids 
                  let opricaIDS=opricaUsers;
                console.log((object.keys(opricaUsers)) result ["01","02","03"]
                  3:getting all the entries
                  let opricaEntries=opricaUsers;
                console.log((object.entries(opricaUsers)) result["01","ally@oprica.com","02","salehe@oprica.com","03","diah@oprica.com"]
*/

-----------------------------FUTURE UPDATES -----------------------------------------
-AUTHENTICATION
-SEPARATE SCHEMAS FOR DIFFERENT USERS
-CONNECT TO OTHER USERS AS A SOCIAL MEDIA FOR GROCERY 