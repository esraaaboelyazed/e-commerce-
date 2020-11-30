let userData;
let userIndex = 0;

let username = document.getElementById('input-username');
let firstname = document.getElementById('input-first-name');
let lastname = document.getElementById('input-last-name');
let email = document.getElementById('input-email');
let password = document.getElementById('input-password');

let address = document.getElementById('input-address');
let city = document.getElementById('input-city');
let country = document.getElementById('input-country');
let postalcode = document.getElementById('input-postal-code');
let aboutme = document.getElementById('aboutme');
let rightUserName = document.getElementById('right_user_name');
let userimg = document.getElementsByTagName('userimg');

let choose_file = document.getElementById('choose_file');

document.getElementById('editprofile').addEventListener('click', (e) => { // when click on edit profile button
    for (let i = 1; i < document.getElementsByTagName('input').length; i++) { //to remove all inputs read only attribute
        document.getElementsByTagName('input')[i].removeAttribute('readonly');
    }
    for (let i = 0; i < document.getElementsByClassName('fa').length; i++) {
        document.getElementsByClassName('fa')[i].setAttribute('style', 'display:inline');
    }
    choose_file.style.display = 'block';

});
choose_file.addEventListener('change', (e) => {
    userimg.src = choose_file.value;
});
let currentUser = JSON.parse(localStorage.getItem("current user"));
let users = JSON.parse(localStorage.getItem("users"));
users.forEach(user => {
    if (user.email == currentUser) {
        userData = user;
        userIndex++;
    }
});
window.onload = (event) => {
    firstname.value = userData.fname;
    lastname.value = userData.lname;
    email.value = userData.email;
    password.value = userData.password;
    username.value = userData.fname + userData.lname;
    rightUserName.innerHTML = userData.fname + userData.lname;
    address.value = userData.address;
    city.value = userData.city;
    country.value = userData.country;
    aboutme.value = userData.aboutme;
    postalcode.value = userData.postalcode;
    userimg.src = userData.photosrc;
    for (let i = 1; i < document.getElementsByTagName('input').length; i++) { //to make all inputs read only and start from one to avoid search input
        document.getElementsByTagName('input')[i].setAttribute('readonly', true);
    }


}

document.getElementById('save').addEventListener('click', (e) => { //saving data
    let obj = {
        fname: firstname.value,
        lname: lastname.value,
        email: email.value,
        password: password.value,
        username: firstname.value + lastname.value,
        address: address.value,
        city: city.value,
        country: country.value,
        postalcode: postalcode.value,
        aboutme: aboutme.value,
        photosrc: userimg.src
    };
    for (let i = 1; i < document.getElementsByTagName('input').length; i++) { //to make all inputs read only and start from one to avoid search input
        document.getElementsByTagName('input')[i].setAttribute('readonly', true);
    }
    for (let i = 0; i < document.getElementsByClassName('fa').length; i++) {
        document.getElementsByClassName('fa')[i].setAttribute('style', 'display:none');
    }
    users[userIndex - 1] = obj;
    localStorage.setItem('users', JSON.stringify(users));
    choose_file.style.display = 'none';
});