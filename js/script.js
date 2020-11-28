<<<<<<< HEAD
 $('#password, #confirm_password').on('keyup', function() {
     if ($('#password').val() == $('#confirm_password').val()) {
         $('#message').html('Matching').css('color', 'green');
     } else
         $('#message').html('Not Matching').css('color', 'red');
 });
 let found;
 let users = [];
 form = document.getElementById('form');
 class User {
     constructor(fname, lname, email, password) {
         this.fname = fname;
         this.lname - lname;
         this.email = email;
         this.password = password;
     }
 }

 document.getElementById('signup-btn').addEventListener('click', (e) => { // event on sign up button
     let usersInlocalStorage = JSON.parse(localStorage.getItem("users"));
     let fname = document.forms["form"]["fname"].value;
     let lname = document.forms["form"]["lname"].value;
     let email = document.forms["form"]["email"].value;
     let password = document.forms["form"]["password"].value;
     let confpassword = document.forms["form"]["confirm_password"].value;
     let user = new User(fname, lname, email, password);
     //check validation
     if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/g.test(password) && fname != '' && /(?=.*[@])/g.test(email)) {
         e.preventDefault();
         if (password == confpassword) { // password and confirm password matches
             if (usersInlocalStorage == null) { //website contains no users
                 users = [];
                 users.push(user);
                 localStorage.setItem("users", JSON.stringify(users));
                 alert("first user added");
             } else if (usersInlocalStorage != null) { //website contain users
                 if (emailExist(usersInlocalStorage, email)) { // check email exist before or not
                     alert("!email user exist , enter a different email");
                     found = false;
                 } else { //email not exist before
                     users = JSON.parse(localStorage.getItem("users"));
                     users.push(user);
                     localStorage.setItem("users", JSON.stringify(users));
                     alert("anotheruser added");
                     form.reset();
                 }
             }


         } else { // password and confirm password not matches
             alert("password and confirm password should match");
             $('#message').html('Not Matching').css('color', 'red');
         }
     } else { //user did not enter all values
         alert("all values required for registeration");
         e.preventDefault();
     }
 });

 function emailExist(usersInlocalStorage, email) {
     found = false;
     usersInlocalStorage.forEach(user => {
         if (user.email == email) {
             found = true;
         }
     });
     return found;
 }
=======


var productsContainer = 
[
      "samsong laptop" , 
      "lg laptop" ,
      "tornado laptop" ,
      "sharp tv" ,
      "toshiba tv" , 
      "tornado tv " ,
      "sony mobile" ,
      "iphone 7plus",
      "iphone 11",
      "iphone mini",
      "iphone 8",
      "samsong a7",
      "samsong a7",
      "samsong a7",
      "samsong a7",
      "unionair tv" , 
      "jac tv" ,
      "sharp laptop" ,
      "toshiba laptop" , 

]
function searchProducts(query)
 {
       var temp = ``;
       var newSearchResult = `` ;
       for(var i = 0 ; i < productsContainer.length ; i++)
       {
             if(productsContainer[i].includes(query.trim()) == true)
             { 
                  newSearchResult = productsContainer[i].replace(query , `<span style="color:orange">`+query+`</span>`)
                   temp += `<a class="d-block px-3 py-1" href="#categories">`+newSearchResult+`</a>`;

             }
       }
       document.getElementById("searchResults").innerHTML = temp;
 };
>>>>>>> 6f202c56258f0031f8acce0749f036e862a92036
