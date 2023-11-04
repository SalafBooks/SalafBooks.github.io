/*!
* Start Bootstrap - Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function myFunction(){
    let input = document.getElementById("myInput");
    let filter = input.value.toLowerCase();
    let itemlists = document.getElementsByTagName("div");

    for (let i = 0; i < itemlists.length; i++){
        let item = itemlists[i];
        let id = item.getAttribute("data-value");
        let h5 = item.getElementsByTagName("h5");
        let h9 = item.getElementsByTagName("h9");

        if (h5.length > 0 || h9.length > 0){
            h5 = h5[0];
            h9 = h9[0];
            if (id != null || id){
                if (id == filter || h5.innerHTML.toLowerCase().includes(filter) || h9.innerHTML.toLowerCase().includes(filter)){
                    itemlists[i].style.display = "";
                }
                else{
                    itemlists[i].style.display = "none";
                }
            }else{
                itemlists[i].style.display = "";
            }
        }else{
            itemlists[i].style.display = "";
        }
    }
}

function filterSelection(filter){
    let x = document.getElementsByClassName("filterDiv");
    let inp = document.getElementById("myInput");

    inp.value = "";
    filter = filter.toLowerCase();

    console.log(x);

    if (filter == "all") filter = "";

    for (let i = 0; i < x.length; i++) {
        let item = x[i];
        let id = item.getAttribute("data-value").toLowerCase();

        console.log(id);
        console.log(filter);

        w3RemoveClass(item, "show");

        if (id == filter || filter == "") w3AddClass(item, "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    // let arr1 = element.className.split(" ");
    // let arr2 = name.split(" ");

    // for (let i = 0; i < arr2.length; i++) {
    //     if (arr1.indexOf(arr2[i]) == -1){
    //         element.className += " " + arr2[i];
    //     }
    // }
    element.style.display = "";
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    // let arr1 = element.className.split(" ");
    // let arr2 = name.split(" ");

    // for (let i = 0; i < arr2.length; i++){
    //     while (arr1.indexOf(arr2[i]) > -1) {
    //         arr1.splice(arr1.indexOf(arr2[i]), 1)
    //     }
    // }

    // element.className = arr1.join(" ");
    element.style.display = "none";
}

let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");

filterSelection("all");
for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];

    btn.addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}