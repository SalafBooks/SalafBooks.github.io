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
    let div = document.getElementById("items");

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

    console.log(filter);
}