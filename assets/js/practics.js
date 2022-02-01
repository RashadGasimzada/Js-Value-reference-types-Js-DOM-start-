let myP = document.getElementById("intro");

myP.innerHTML = "<b>Hello world!</b>";

let text = document.getElementsByClassName("text");

console.log(text);

let box = document.querySelector(".box");

let boxes = document.querySelectorAll(".box");

box.style.backgroundColor = "grey";

let btn = document.getElementById("btn");

btn.onclick = function(){
    alert("Hello P126")
}
    
btn.onclick = function(){
    alert("Bye P126")
}
    
btn.addEventListener("click",function(){
    alert("Hello P126")
})
btn.addEventListener("click",function(){
    alert("Bye P126")
})

let input = document.querySelector(".input");
let btn2 = document.getElementById("btn2");

// btn2.onclick = function(){
//     if(input.value.trim() != ""){
//         console.log(input.value)
//     }

//     input.value = "";
// }
let parentLi = document.querySelector(".parent-li")
btn2.addEventListener("click", function () {

    if (input.value == "") {
        alert("Please set value");
        return;
    }
    let li = document.createElement("li");
    li.innerText = input.value;
    parentLi.append(li);

})