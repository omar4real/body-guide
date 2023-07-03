// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// document.write("your name is " + username )
// document.write("your email is " + email )
// document.write("your password is " + password)
// document.getElementsByClassName
let list = {
    name : "someone",
    last_name: "alm3lm",
    birthday : {
        year : 7,
        day : 17,
        month : 6
    }
}
let smth = document.getElementsByTagName("div")[1];
console.log(smth);
smth.innerHTML = list.name;