let price_a=100;
let price_b=200;
const shipping_charges=59;
const express_shipping = 89;
const cod = 49;
var cgst_A  = 100/10;;
var hgst_A = 100/20;
var cgst_B = 200/10;
var hgst_B = 200/20
let gst_A = cgst_A+hgst_A;
let gsts_B = cgst_B+hgst_B;

let tot_A = price_a + shipping_charges + cgst_A;
let tot_B = price_b + shipping_charges + cgst_B;

var fname = document.getElementsById("first").value;
var lname = document.getElementsById("last").value; 
var address = document.getElementsById("address").value;
var pincodee = document.getElementsById("pin").value;
var City = document.getElementsById("city").value;
var mail = document.getElementsById("email").value;
var phone = document.getElementsById("tel").value;

localStorage.setItem('tot_A',tot_A);
localStorage.setItem('tot',tot_B);
localStorage.setItem("first", fname);
localStorage.setItem("last", lname);
localStorage.setItem("address", address);
localStorage.setItem("pin", pincodee);
localStorage.setItem("city", City);
localStorage.setItem("email", mail);
localStorage.setItem("tel", phone);

window.location.href ="Akil.html";

console.log(fname);



