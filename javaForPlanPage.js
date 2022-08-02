const inputPlace = document.querySelector("#inputPlace");



const myList = document.querySelector(".my-list");


const addBtn = document.querySelector(".add-btn");

const clearBtn = document.querySelector(".clear-btn");





addBtn.addEventListener("click", addToList);


clearBtn.addEventListener('click', clearMyList);

myList.addEventListener('click', removeList);





//-----------------Start --- Function to add List -----------------//
function addToList() {
  if (inputPlace.value === "") {
    alert("Please enter your place to add");

    return 0;
  } else {
    //create new list

    let newList = document.createElement("li");

    // create new text node and assign to input place
    let newText = document.createTextNode(inputPlace.value);

    // append new text to new list
    newList.appendChild(newText);

    // create a new icon
    let newIcon = document.createElement("i");

    // add class name to new icon
    newIcon.classList.add("fa", "fa-remove");

    // add new icon to new list
    newList.appendChild(newIcon);

    //add new li to ul

    myList.appendChild(newList);

    // clear input value
    inputPlace.value = "";
  }
}

//-----------------End --- Function to add List -----------------//


//-----------------Start--- Function to delete List -----------------//

function removeList(e){

    if(e.target.className === 'fa fa-remove')


    if(confirm('Are you sure to delete?'))
    
    {
     

        console.log(e.target);

        console.log(e.target.parentElement);

        e.target.parentElement.remove();

       
    }
}





//-----------------End--- Function to delete List -----------------//








//-----------------Start --- Function to clear my List -----------------//

function clearMyList(){

while(myList.hasChildNodes()){
    myList.removeChild(myList.firstChild);
}

}





//-----------------End --- Function to clear my List -----------------//
