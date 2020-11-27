let userInfo = document.querySelector("#user_info")
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");
if (username){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username ;
}

logoutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="SignUp.html";},1000);
    });

let productsDom = document.querySelector(".products")
    let products = [{
        id: 1,
        title: "headphone item",
        size:"large",
        imageUrl: "../images/57893.jpg",
    },
   { id: 2,
    title: "headphone item",
    size:"large",
    imageUrl: "../images/57893.jpg",

},
{  id: 3,
    title: "headphone item",
    size:"large",
    imageUrl: "../images/57893.jpg",

},
];

function drawProductsUI(){
    let productsUI = products.map((item)=>{
        return `
     <div class="product-item">
        <img src="${item.imageUrl}" class="product-item-img" alt="image"/>
        <div class="product-item-desc">
            <h2${item.title}</h2>
            <p>Lorem ipsum </p>
            <span>size: ${item.size}</span>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to Cart</button>
            <i class="far fa-heart"></i>
        </div>
        </div> 

        `;

    });
    productsDom.innerHTML = productsUI ;
}
drawProductsUI();
 function addedToCart(id){
     let choosenItem = products.find((item) => item.id=== id );
     console.log(choosenItem);
 }

 function checkLogUser(){
     if (localStorage.getItem("username")){
         console.log("added to cart");
     }else{
         window.location = "LogIn.html"
     }
 }