var data_div = document.getElementById("data");
var total = 0;

var cost = document.getElementById("price");

function appendLocations(el) {

        var data_div = document.getElementById("data");

        var div = document.createElement("div");

        var p_name = document.createElement("p");

        p_name.innerHTML = el.name;

        let p_price = document.createElement("p");

        p_price.innerHTML = el.price;

        total += +el.price;

        cost.innerText = total;

        let img = document.createElement("img");

        img.src = el.image;

        div.append(p_name, p_price, img);

        data_div.append(div);
    
}

function showCart() {

    let data = JSON.parse(localStorage.getItem("myjewel"));

    data_div.innerHTML = null;

    var items = document.getElementById("count");
    items.innerText = data.length;

    data.forEach(function(el) {
        appendLocations(el);
    })
}

showCart();