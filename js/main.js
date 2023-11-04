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