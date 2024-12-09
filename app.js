console.log("hellow js");

const input = document.querySelector("#input");
const div = document.querySelector("#output");
const arr = []




function add() {
    arr.push(input.value);
    div.innerHTML =""

    for(var i = 0; i< arr.length;i++){
        div.innerHTML +=  ` <div id="content">  ${arr[i]} <i class="fa-solid fa-trash" id="delete" onclick="delete1(${i})"></i> <i class="fa-solid fa-pen-to-square" id="edit" onclick="edit(${i})"></i></div> </br>
       
`
      
        
    }
    input.value = ""
    
}


function delete1(index) {
    arr.splice(index,1)
    div.innerHTML =""

    for(var i = 0; i< arr.length;i++){
        div.innerHTML +=  `<div id="content">  ${arr[i]} <i class="fa-solid fa-trash" id="delete" onclick="delete1(${i})"></i> <i class="fa-solid fa-pen-to-square" id="edit" onclick="edit(${i})"></i></div> </br>` 
}
}


function edit(index) {

    var newvalue = prompt("enter new value")
    arr[index] = newvalue
    div.innerHTML =""

    for(var i = 0; i< arr.length;i++){
        div.innerHTML +=  `<div id="content">  ${arr[i]} <i class="fa-solid fa-trash" id="delete" onclick="delete1(${i})"></i> <i class="fa-solid fa-pen-to-square" id="edit" onclick="edit(${i})"></i></div> </br>`
    
}
    }