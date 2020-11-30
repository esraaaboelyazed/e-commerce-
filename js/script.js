var productsContainer = [
    "samsong laptop",
    "lg laptop",
    "tornado laptop",
    "sharp tv",
    "toshiba tv",
    "tornado tv ",
    "sony mobile",
    "iphone 7plus",
    "iphone 11",
    "iphone mini",
    "iphone 8",
    "samsong a7",
    "samsong a7",
    "samsong a7",
    "samsong a7",
    "unionair tv",
    "jac tv",
    "sharp laptop",
    "toshiba laptop",

]

function searchProducts(query) {
    var temp = ``;
    var newSearchResult = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].includes(query.trim()) == true) {
            newSearchResult = productsContainer[i].replace(query, `<span style="color:orange">` + query + `</span>`)
            temp += `<a class="d-block px-3 py-1" href="#categories">` + newSearchResult + `</a>`;

        }
    }
    document.getElementById("searchResults").innerHTML = temp;
};